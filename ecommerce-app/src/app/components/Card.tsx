import Link from "next/link";
import Navbar from "./Navbar";
import { ProductType } from "@/db/models/product";
import { rupiah } from "@/helpers/rupiah";

type Props = {
    product: ProductType;
};

export default function Card(props: Props) {
    return (
        // <Link >
            <Link
                href={`/product/${props.product.slug}`}
                className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-2xl font-[sans-serif] overflow-hidden mx-auto mt-4"
            >
                <div className="min-h-[256px]">
                    <img
                        src={props.product.thumbnail}
                        alt="Book"
                        className="w-full rounded-2xl"
                    />
                </div>
                <div className="p-6">
                    <h3 className="text-2xl text-gray-800 font-extrabold">
                        {props.product.name}
                    </h3>
                    <div className="mt-6 flex items-center">
                        <h2>{props.product.excerpt}</h2>
                        <h3 className="text-xl text-gray-800 font-bold flex-1">
                            {rupiah(props.product.price)}
                        </h3>
                    </div>
                </div>
            </Link>
    );
}
