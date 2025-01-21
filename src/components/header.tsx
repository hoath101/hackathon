import React from 'react'
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { IoPersonCircleOutline } from "react-icons/io5";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { RxHamburgerMenu } from 'react-icons/rx';

const Header = () => {
  return (
    <main className='max-w-[1300px] h-[132px] items-center overflow-hidden'>
      <div className='hidden lg:block'>
        <div className='flex justify-between'>
          <div className='m-4 '>
            <CiSearch className='size-5' />
          </div>
          <h2 className='text-[#22202E] m-4 text-xl'>Avion</h2>
          <div className='flex m-4 gap-3 ml-4'>
            <Link href="/cart"><IoCartOutline className='size-5' /></Link>
            <IoPersonCircleOutline className='size-5 cursor-pointer' />
          </div>
        </div>
        <hr />
        <div className='flex justify-center gap-9 m-4 cursor-pointer'>
          <ul className='text-[#726E8D]'>Plantpots</ul>
          <ul className='text-[#726E8D]'>Ceramics</ul>
          <ul className='text-[#726E8D]'>Tables</ul>
          <ul className='text-[#726E8D]'>Chairs</ul>
          <ul className='text-[#726E8D]'>Crokery</ul>
          <ul className='text-[#726E8D]'>Tableware</ul>
          <ul className='text-[#726E8D]'>Cutlery</ul>
        </div>
      </div>
      <div className="block mt-3 ml-4 mr-4 lg:hidden">
            <div className="flex justify-between ">
                <h2 className="text-3xl text-[#22202E] ml-7">
                    Avion
                </h2>
                <div className="flex gap-5 mr-4">
                    <CiSearch className="size-7 mt-1"/>
                    <Sheet>
                        <SheetTrigger><RxHamburgerMenu className="size-6"/>
                            <SheetContent className="w-[250px]">
                                <SheetTitle className='hidden'></SheetTitle>
                                <ul className='grid grid-col-1 justify-center items-center mt-7 gap-5'>
                                    <Link href="/">Home</Link>
                                    <Link href="/about">About</Link>
                                    <Link href="/products">Products</Link>
                                    <Link href="/cart"><IoCartOutline className="size-5" /></Link>
                                </ul>
                            </SheetContent>
                        </SheetTrigger>
                    </Sheet>
                </div>
            </div>
            </div>
    </main>

  )
}

export default Header