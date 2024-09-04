import Link from "next/link";

export default function Banner2() {
    return (
        <div className="bg-gradient-to-r from-blue-900 to-gray-800 font-sans px-6 py-12">
            <div className="container mx-auto flex flex-col justify-center items-center text-center">
                <h2 className="text-white sm:text-4xl text-3xl font-bold mb-4">
                    Discover Our Discount Collection
                </h2>
                <p className="text-white text-base text-center mb-8">
                    Elevate your style with our latest arrivals. Shop now and
                    enjoy exclusive discounts!
                </p>
                <button
                    type="button"
                    className="bg-white text-sm text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-slate-100"
                >
                    <Link href={"product"}>
                    See Discount!
                    </Link>
                </button>
            </div>
        </div>
    );
}
