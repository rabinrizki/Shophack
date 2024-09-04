import { ObjectId, WithId } from "mongodb";
import { db } from "../config";
import {hash} from "bcryptjs"
import {z} from 'zod'

const UserSchema = z.object({
    name: z.string(),
    username: z.string(),
    email: z.string().email(),
    password: z.string().min(5),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional()
})

export type UserType = WithId<z.infer<typeof UserSchema>>

export class User {
    static col() {
        return db.collection("user");
    }

    static async findAll() {
        const result = await this.col().find().toArray();
        return result;
    }

    static async findByPk(_id: string) {
        const result = await this.col().findOne({ _id: new ObjectId(_id) });
        return result;
    }

    static async findUserByEmail(email: string) {
        const results = await this.col().findOne({
            email,
        });
        if(!results) return null
        return results;
    }

    static async register(newUser: UserType) {
        newUser.password = await hash(newUser.password, 10)
        newUser.createdAt = newUser.updatedAt = new Date()
        const result = await this.col().insertOne(newUser)
        const {password, ...otherData} = newUser
        return {
            _id: result.insertedId.toString(),
            ...otherData,
        };
    }

    

    
}

