//import Image from "next/image";
'use client'
import NumberList from "./listing";
import Search from "./search";
import { products } from './mock/products';
import { useState } from "react";
export type Product = {
id: string | number
name: string
} 
export default function Home() {
  // let numbers: Product[];
  // let setnumbers: void
  const [numbers, setnumbers] = useState<Product[]>([]);
  function getProducts() {
    console.log('rerero')
    setnumbers(products)
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
       <Search onsearch={()=>getProducts}/>
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Listing
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {numbers.map((number:Product) => (
      <NumberList {...number} key={number.id}/>
    ))};
      </div>
      </div>
    </div>
  </main>
  );
}
