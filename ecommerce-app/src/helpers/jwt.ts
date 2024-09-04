import * as jose from "jose"
export async function verifyToken<T>(token: string) {
   const secret = new TextEncoder().encode(
      process.env.JWT_SECRET,
   )

   const {payload, protectedHeader} = await jose.jwtVerify(token, secret)
   return payload as T
}