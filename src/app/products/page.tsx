import Header from "@/components/header"
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import { TiArrowSortedDown } from "react-icons/ti";
export interface Product {
  _id: string;
  name: string;
  slug: string;
  imageUrl: string; // URL of the image
  price: number;
  quantity: number;
  tags: string[]; // Array of tags
  dimensions: string[];
  description: string;
}
const Blog = async () => {
  const data: Product[] = await client.fetch(`*[_type == "product"]{
    _id,
    name,
    slug,
    "imageUrl": image.asset->url,
    price,
    quantity,
    tags,
  }`)
  return (
    <main className="overflow-hidden ">
      <Header />
      <h1 className="absolute text-white text-3xl mt-32 ml-12 font-extralight">All products</h1>
      <Image src="/pictures/stool-1.png" alt="Stool-pic" width={1400} height={209} className="h-[209px] "></Image>
      <div className="bg-gray-100 p-2">
        <div className="w-[1400px] h-[64px] flex justify-between text-[#2A254B]">
          <div className="flex gap-10 ml-12 w-[557px] h-[48px] mt-6">
            <ul className="flex ">Category <TiArrowSortedDown className="mt-1 ml-3" /></ul>
            <ul className="flex ">Product type <TiArrowSortedDown className="mt-1 ml-3" /></ul>
            <ul className="flex ">Price <TiArrowSortedDown className="mt-1 ml-3" /></ul>
            <ul className="flex ">Brand <TiArrowSortedDown className="mt-1 ml-3" /></ul>
          </div>
          <div className="flex gap-6 mr-20 w-[237px] h-[48px] mt-6">
            <ul>Sorting by:</ul>
            <ul className="flex">Date added <TiArrowSortedDown className="mt-1 ml-3" /></ul>
          </div>
        </div>
        <div className='grid ml-6 grid-cols-2 lg:grid-cols-4 gap-8 mt-5 lg:ml-16 mb-10'>
          {
            data.map((data, index) => {
              return (
                <Link key={index} href={"/product"}>
                  <div className='shadow-md  hover:scale-105 active:scale-100 transition h-[395px] '>
                    <Image src={data.imageUrl} alt={data.name} height={280} width={200}
                      className="w-[285px] h-[280px] object-cover"></Image>
                    <div className="p-2">
                      <h2 className='text-2xl mb-3 mt-2'>
                        {data.name}
                      </h2>
                      <p className=''>
                        ${data.price}
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