//import Image from "next/image";
import NumberList from "./listing";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Listing
        </h2>
        <NumberList numbers={[1, 2, 3, 4]} />
      </div>
    </div>
  </main>
  );
}
