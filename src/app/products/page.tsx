import { Metadata } from "next"
import Header from "@/components/header"
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import { TiArrowSortedDown } from "react-icons/ti";

export const metadata: Metadata = {
  title: "All Products | Avion",
  description: "Browse our full collection of handcrafted furniture, ceramics, and homeware at Avion.",
}

export interface Product {
  _id: string;
  name: string;
  slug: string;
  imageUrl: string;
  price: number;
  quantity: number;
  tags: string[];
  dimensions: string[];
  description: string;
}

const Blog = async () => {
  let data: Product[] = []
  try {
    data = await client.fetch(`*[_type == "product"]{
      _id,
      name,
      slug,
      "imageUrl": image.asset->url,
      price,
      quantity,
      tags,
    }`)
  } catch {
    // return empty list on error
  }

  return (
    <main className="overflow-x-hidden">
      <Header />
      <div className="relative">
        <h1 className="absolute text-white text-3xl mt-32 ml-12 font-extralight z-10">All products</h1>
        <Image src="/pictures/stool-1.png" alt="All products banner" width={1400} height={209} className="h-[209px] w-full object-cover"></Image>
      </div>
      <div className="bg-gray-100 p-2">
        <div className="w-full max-w-screen-xl h-auto flex flex-wrap justify-between text-[#2A254B] py-2">
          <div className="flex flex-wrap gap-6 ml-4 lg:ml-12 mt-4">
            <li className="flex list-none cursor-pointer">Category <TiArrowSortedDown className="mt-1 ml-1" /></li>
            <li className="flex list-none cursor-pointer">Product type <TiArrowSortedDown className="mt-1 ml-1" /></li>
            <li className="flex list-none cursor-pointer">Price <TiArrowSortedDown className="mt-1 ml-1" /></li>
            <li className="flex list-none cursor-pointer">Brand <TiArrowSortedDown className="mt-1 ml-1" /></li>
          </div>
          <div className="flex gap-4 mr-4 lg:mr-20 mt-4">
            <li className="list-none">Sorting by:</li>
            <li className="flex list-none cursor-pointer">Date added <TiArrowSortedDown className="mt-1 ml-1" /></li>
          </div>
        </div>
        <div className='grid ml-4 lg:ml-16 grid-cols-2 lg:grid-cols-4 gap-8 mt-5 mb-10'>
          {
            data.map((item, index) => {
              return (
                <Link key={index} href={"/product"}>
                  <div className='shadow-md hover:scale-105 active:scale-100 transition h-auto min-h-[350px]'>
                    <Image src={item.imageUrl} alt={item.name} height={280} width={200}
                      className="w-full h-[280px] object-cover"></Image>
                    <div className="p-2">
                      <h2 className='text-xl mb-2 mt-2'>
                        {item.name}
                      </h2>
                      <p className=''>
                        £{item.price}
                      </p>
                    </div>
                  </div>
                </Link>
              )
            })
          }
        </div>
      </div>
    </main>
  )
}

export default Blog
