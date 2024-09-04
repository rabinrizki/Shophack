import { User, UserType } from "@/db/models/user";
import { ZodError } from "zod";

export async function POST (request: Request) {
    try {
        const body = await request.json() as UserType
        await User.register(body)
        return Response.json({message: "Success register"}, {status: 201})
    } catch (error) {
        if(error instanceof ZodError) {
            const formatted = error.issues.map(issue => {
                return issue.path[0] + " " + issue.message.toLowerCase()
            })
            return Response.json({error: "error"})
        }
    }
}