//import Image from "next/image";
'use client'
import NumberList from "./listing";
import Search from "./search";
//import { products } from './mock/products';
import { useState } from "react";
export type Product = {
image: string
title: string
id: number
} 
export default function Home() {
  const [numbers, setnumbers] = useState<Product[]>([]);
  const [searchKey, setsearchkey] = useState('')
  function getProducts(te,ll) {
    const url = ll?`https://fakestoreapi.com/products/category/${ll}`:'https://fakestoreapi.com/products'
    fetch(url)
            .then(res=>res.json())
            .then(json=>setnumbers(json))
    setsearchkey(ll);
  }
  return (
    <main className="flex min-h-screen flex-col p-12">
       <Search onsearch={getProducts}/>
    <div className="bg-white pt-4">
      <div className="mx-auto max-w-2xl lg:max-w-7xl">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          {(searchKey)?searchKey:'search...'}
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {numbers.map((number:Product) => (
      <NumberList {...number} key={number.id}/>
    ))}
      </div>
      </div>
    </div>
  </main>
  );
}
