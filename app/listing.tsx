import Link from "next/link";
import { Product } from "./page";

//import Image from 'next/image';
export default function NumberList(line:Product) {
    const imgUrl = line.image
    return (
      <div className="group relative">
      <img
        src={imgUrl}
        alt="Basic Tee in black."
        className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
      ></img>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
          <Link href={'product-details/'+line.id}>
              <span aria-hidden="true" className="absolute inset-0"></span>
            {line.title}
            </Link >
          </h3>
          <p className="mt-1 text-sm text-gray-500">${line.price}</p>
        </div>
        <p className="text-sm font-medium text-gray-900"></p>
      </div>
    </div>
    )
  }
  