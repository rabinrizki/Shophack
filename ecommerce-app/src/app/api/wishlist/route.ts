import {Wishlist , WishlistType } from "@/db/models/wishlist"
import { ZodError } from "zod";

export async function POST(request: Request) {
    try {
        const body: WishlistType = await request.json()
        console.log(body,"body<<<<<<<<<<<<<<<<<<<<<<<<<<<");
        
        const result = await Wishlist.create(body)
        return Response.json({msg: result})
    } catch (error) {
        return Response.json(error)
    }
}

export async function GET(request: Request) {
        
    try {
      const userId = request.headers.get("x-user-id") as string;
  
      const list = await Wishlist.getAll(userId);
      console.log(userId, "user<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");
      
        console.log(list, "list<><><><><><><>><><><><>><");
        
  return Response.json(list);
    } catch (error) {
      return Response.json(error);
    }
    
  }
