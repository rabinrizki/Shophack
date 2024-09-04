import { ObjectId } from "mongodb";
import { db } from "../config";
import {hash} from "bcryptjs"
import {z} from 'zod'
import Products from "@/app/product/page";

const ProdutcSchema = z.object({
    name: z.string(),
    slug: z.string(),
    description: z.string(),
    excerpt: z.string(),
    price: z.number(),
    tags: z.array(z.string()),
    thumbnail: z.string(),
    images:z.array(z.string()),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional()

})

export type ProductType = z.infer<typeof ProdutcSchema>

export class Product {
    static col() {
        return db.collection<ProductType>("shophack");
    }

    static async findAll(page: number = 1, limit: number = 8, search?: string) {
        try {
          let filter = {};
          if (search) {
            filter = {
              $or: [
                {
                  name: { $regex: search, $options: "i" },
                },
              ],
            };
          }
          const skip = (page - 1) * limit;
    
          const result = await this.col().find(filter).skip(skip).limit(limit).toArray();
    
          return result;
        } catch (error) {
          console.log(error);
        }
      }

    static async findSlug (slug: string) {
        const result = await this.col().findOne({slug: slug})
        return result
    }

}

