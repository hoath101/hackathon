import React from 'react'
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { IoPersonCircleOutline } from "react-icons/io5";
import Link from "next/link";
const Header = () => {
  return (
    <main className='w-[1350px] h-[132px] items-center'>
      <div className='flex justify-between'>
        <div className='m-4 '>
          <CiSearch className='size-5' />
        </div>
        <h2 className='text-[#22202E] m-4 text-xl'>Avion</h2>
        <div className='flex m-4 gap-3 ml-4'>
          <Link href="/cart"><IoCartOutline className='size-5' /></Link>
          <IoPersonCircleOutline className='size-5' />
        </div>
      </div>
      <hr />
      <div className='flex justify-center gap-9 m-4'>
        <ul className='text-[#726E8D]'>Plantpots</ul>
        <ul className='text-[#726E8D]'>Ceramics</ul>
        <ul className='text-[#726E8D]'>Tables</ul>
        <ul className='text-[#726E8D]'>Chairs</ul>
        <ul className='text-[#726E8D]'>Crokery</ul>
        <ul className='text-[#726E8D]'>Tableware</ul>
        <ul className='text-[#726E8D]'>Cutlery</ul>
      </div>
    </main>

  )
}

export default Header