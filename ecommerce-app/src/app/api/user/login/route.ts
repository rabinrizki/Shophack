import {User, UserType } from "@/db/models/user"
import { compare } from "bcryptjs"
import {z, ZodError} from "zod"
import {sign} from "jsonwebtoken"

const LoginSchema = z.object({
    email: z.string().email(),
    password: z.string()
})

export async function POST(request: Request) {
    try {
        const body = await request.json() as UserType
        LoginSchema.parse(body)

        const user = await User.findUserByEmail(body.email)
        
        if(!user) {
            throw new Error("Invalid email or password")
        }
        console.log(user, "user<<<<<<<<<<<<<<<<<<");

        const isValid = await compare(body.password, user.password)
        console.log(body.password, "<<<<<<");
        
        if(!isValid) {
            throw new Error("Invalid email or password")
        }
        console.log(user, "user22222<<<<<<<<<<<<<<<<<<");
        const {password, ...userSafe} = user
        const access_token = sign(userSafe, process.env.JWT_SECRET)
        return Response.json({access_token: access_token})
    } catch (error) {
        if(error instanceof ZodError) {
            const formatted = error.issues.map(issue => {
                return issue.path[0] + " " + issue.message.toLowerCase()
            })
            return Response.json({error: formatted}, {status: 400})
        }

        if(error instanceof Error) {
            return Response.json({error: error.message}, {status: 401})
        }
        return Response.json({error: "Internal server error"})
    }
}