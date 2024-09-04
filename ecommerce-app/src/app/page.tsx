import { Product } from "@/db/models/product";
import Card from "../../src/app/components/Card";
import Navbar from "../../src/app/components/Navbar";
import Banner from "./components/Banner";
import Banner2 from "./components/Banner2";
import Footer from "./components/Footer";
import Link from "next/link";

export default async function homepage () {

    const products = await fetch("http://localhost:3000/api/product")
    const data = await products.json() as Product[]
    console.log(data, "<<<<<<<<<product");
    
    return (
        <>
        <Navbar />
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  {/* google font */}
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
    rel="stylesheet"
  />
  <style
    dangerouslySetInnerHTML={{
      __html: "\n    body {\n      font-family: Poppins, sans-serif;\n    }\n  "
    }}
  />
  <Banner />
  <div className="bg-white text-black text-[15px]">
    <div className="px-4 sm:px-10">
      <div className="mt-28 bg-gray-50 px-4 sm:px-10 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="md:text-center max-w-2xl mx-auto">
            <h2 className="md:text-4xl text-3xl font-bold mb-6">
              Discover Our Exclusive Prouducts
            </h2>
            <p>
              Unlock a world of possibilities with our exclusive features.
              Explore how our unique offerings can transform your journey and
              empower you to achieve more.
            </p>
          </div>
        </div>
      </div>
    </div>
    <Link href={'product'} className="button text-2xl" style={{marginLeft:730}}>
      See All
      </Link>
      <br />
      <br />
    <div className="">
    <div  className="flex-wrap flex " >
        {
          data.slice(0,6).map(product => {
            return (
              <Card key={product.slug} product={product}/>
            )
          })
        }
      </div>
      <br />
      <br />
    <Banner2/>
    </div>
  <Footer/>
  </div>
</>

    )
}