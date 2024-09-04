import { Product } from "@/db/models/product"

type DetailProduct = {
    params: {
        slug: string
    }
}

export async function GET(request: Request, {params}: DetailProduct) {
    console.log(params, "<<<<<<<<<<<<<<,datas");
    
    const product = await Product.findSlug(params.slug)
    console.log(product, "<<<<product");
    return Response.json(product)
}   