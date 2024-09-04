import { cookies } from "next/headers"
import Link from "next/link"

type Props = {
    children: React.ReactNode
}

export default function ProtectedRoute({ children} : Props) {
    const authCookie = cookies().get('Authorization')

    if(!authCookie) {
        return (
            <main className="grid mx-auto min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg-px-8">
                <div className="text-center">
                    <p className="text-base font-bold text-black">404</p>
                    {/* <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl" >
                        Shophack
                    </h1> */}
                    <Link href={"/"}>
                    <img
                        src="https://i.ibb.co.com/Z2JyJHH/Welcome-to-The-EXTRADIONARY-png.png"
                        alt="logo"
                        className="w-80 flex flex-wrap justify-center"
                        style={{marginLeft:50}}
                    />
                </Link>
                    <p className="mt-6 text-base leading-7 text-gray-600">
                        If you want add product to your Wishlist, you must login
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link href="/login" className="rounded-md bg-black px3.5 w-40 py-5 text-sm font-semibold text-white shadow-sm">
                        Login
                        </Link>
                    </div>
                </div>
            </main>
        )
    }
    return children
}