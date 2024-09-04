"use client";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { ProductType } from "@/db/models/product";
import Banner3 from "../components/Banner3";
import Banner2 from "../components/Banner2";
import Search from "../components/Search";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Products() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [search, setSearch] = useState<string>('');
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch(`/api/product?page=${page}&limit=6&search=${search}`);
        if (!response.ok) throw new Error("Failed to fetch products");
        const data: ProductType[] = await response.json();
        
        if (data.length < 6) {
          setHasMore(false);
        }
        
        setProducts(prev => {
          const filteredData = data.filter(item => !prev.some(p => p.slug === item.slug));
          return [...prev, ...filteredData];
        });

      } catch (error) {
        console.log(error);
      }
    };

    getProducts();
  }, [search, page]); 

  const moreLoad = () => {
    setPage(prev => prev + 1);
  };

  const searchHandle =  (keyword: string) => {
    setSearch(keyword)
    setPage(1)
    setHasMore(true)
    setProducts([])
  }

  return (
    <div>
      <Navbar />
      <Banner2 />
      <div className="text-center max-w-2xl mx-auto" style={{marginTop:100}}>
    <h2 className="text-gray-800 text-3xl font-extrabold text-center mb-6">
      Our Exclusive Products
    </h2>
    <p className="text-gray-600 text-sm">
      Unlock a world of possibilities with our exclusive Products. Explore how
      our unique style can transform your journey and empower you to achieve
      more.
    </p>
  </div>
  <br />
  <br />
  <br />
      <Search search={search} searchHandle={searchHandle} />
      <br />
      <br />
      <InfiniteScroll 
        dataLength={products.length}
        next={moreLoad}
        hasMore={hasMore}
       
        loader={  <img
          src="https://media0.giphy.com/media/sSgvbe1m3n93G/200w.webp?cid=ecf05e47u41vxx8tiixez6ptx4dbfsh8lup91cbey82kyovl&ep=v1_gifs_search&rid=200w.webp&ct=g"
          alt="logo"
          className="w-36"
          style={{marginLeft:670, marginTop:200, marginBottom:200}}
      />}
        endMessage={  <img
          src="https://media2.giphy.com/media/C21GGDOpKT6Z4VuXyn/giphy.webp?cid=790b7611kj1mhs3pbt94k8lmrv3vigk1ufbwij9onel37t7g&ep=v1_gifs_search&rid=giphy.webp&ct=g"
          alt="logo"
          className="w-60"
          style={{marginLeft:630, marginTop:200, marginBottom:200}}
      />}
        className="flex flex-wrap"
      >
        {products.map(product => (
          <Card key={product.slug} product={product} />
        ))}
      </InfiniteScroll>
      <Banner3 />
    </div>
  );
}
