import { ObjectId, WithId } from "mongodb";
import { string, z } from "zod";
import { db } from "../config";
import { ProductType } from "./product";

const WishlistSchema = z.object({
    productId: z.string(),
    userId: z.string(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional()
})

export type WishlistType = {
    productId: string
    userId: string
    createdAt?: Date
    updatedAt?: Date
}

export type WishlistProduct = WithId<WishlistType> & {product: ProductType}

export class Wishlist {
    static col() {
        return db.collection<WishlistType>("wishlist")
    }

    static async getAll(userId: string){
        
        const result = this.col().aggregate(
            [
              {
                $match: {
                  userId: new ObjectId(userId)
                }
              },
              {
                $lookup: {
                  from: 'shophack',
                  localField: 'productId',
                  foreignField: '_id',
                  as: 'product'
                }
              },
              {
                $unwind: {
                  path: '$product',
                  preserveNullAndEmptyArrays: true
                }
              },
              { $sort: { _id: -1 } }
            ],
            { maxTimeMS: 60000, allowDiskUse: true }
          ).toArray()

        return result;
    };

    static async getById(id: string) {
        const result = await this.col().findOne({
            _id: new ObjectId(String(id)),
        });

        if (!result) {
            let error = new Error("Wishlist Not Found")
            error.name = "NotFound";
            throw error;
        }
        return result
    }
    
    static async create(payload: WishlistType) {
        payload.createdAt = new Date()
        payload.updatedAt = new Date()
    
        await this.col().insertOne(payload)
        return "Success add to wishlist"
    }
    
    static async delete(id: string) {
        return await this.col().deleteOne({_id: new ObjectId(String(id))})
    }
}