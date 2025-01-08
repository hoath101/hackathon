import Header from "@/components/header"
import Image from "next/image";
import { TiArrowSortedDown } from "react-icons/ti";
const Blog = () => {
  return (
    <main className="max-w-[1450px]">
      <Header/>
      <h1 className="absolute text-white text-3xl mt-32 ml-12 font-extralight">All products</h1>
      <Image src="/pictures/stool-1.png" alt="Stool-pic" width={1400} height={209} className="h-[209px] "></Image>
      <div className="w-[1400px] h-[64px] flex justify-between text-[#2A254B]">
        <div className="flex gap-10 ml-12 w-[557px] h-[48px] mt-6">
          <ul className="flex ">Category <TiArrowSortedDown className="mt-1 ml-3"/></ul>
          <ul className="flex ">Product type <TiArrowSortedDown className="mt-1 ml-3"/></ul>
          <ul className="flex ">Price <TiArrowSortedDown className="mt-1 ml-3"/></ul>
          <ul className="flex ">Brand <TiArrowSortedDown className="mt-1 ml-3"/></ul>
        </div>
        <div className="flex gap-6 mr-20 w-[237px] h-[48px] mt-6">
          <ul>Sorting by:</ul>
          <ul className="flex">Date added <TiArrowSortedDown className="mt-1 ml-3"/></ul>
        </div>
      </div>
    </main>
  )
}

export default Blog