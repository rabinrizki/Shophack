import { Product } from "@/db/models/product";

export async function GET (request: Request) {
    try {
        const url = new URL(request.url)
        const page = parseInt(url.searchParams.get("page") || "1")
        const limit = 6
        const search = url.searchParams.get("search") || undefined;
        const products = await Product.findAll(page, limit, search)
        return Response.json(products, {
            status: 200
    })
    } catch (error) {
        return new Response(JSON.stringify({error: error}), {
            status: 500
        })
    }
}