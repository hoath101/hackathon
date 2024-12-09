import { CiSearch } from "react-icons/ci"
import { FaRegCircleCheck, FaTruckFast } from "react-icons/fa6"
import { FiX } from "react-icons/fi"
import { IoCartOutline, IoPersonCircleOutline, IoPricetagsOutline } from "react-icons/io5"
import Link from "next/link"
import Button, { Product, SignUp } from "@/components/button"
import Image from "next/image"
import { PiFlowerTulip } from "react-icons/pi"


function About() {
    return (
        <main>
            <div className='w-[1350px] h-[132px] items-center'>
                <div className=" h-[41px] bg-[#2A254B] text-white flex justify-end gap-4 text-sm">
                    <FaTruckFast className="fill-white mt-4" />
                    <p className="mt-3 mr-80">
                        Free delivery on all orders over £50 with code easter checkout
                    </p>
                    <FiX className=" fill-white text-xl mt-3 ml-10 mr-10" />
                </div>
                <div className='flex justify-between'>
                    <h2 className='text-[#22202E] m-4 text-xl'>Avion</h2>
                    <div className='flex m-4 gap-3 mr-4 '>
                        <div className="text-[#22202E] flex gap-6 mr-8">
                            <Link href="/about">About us</Link>
                            <Link href="/contact">Contact</Link>
                            <Link href="/blog">Blog</Link>
                        </div>
                        <div className="flex gap-4 mt-1">
                            <CiSearch className='size-5' />
                            <IoCartOutline className='size-5' />
                            <IoPersonCircleOutline className='size-5' />
                        </div>
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
            </div>
            <div className="w-[1440px] h-[220px]">
                <div className="flex justify-around mt-20 mr-10">
                    <p className="text-3xl text-[#2A254B]">A brand built on the love of craftmanship,<br />
                        quality and outstanding customer service</p>
                    <div className="mr-20">
                        <Product />
                    </div>
                </div>
            </div>
            <div className='w-[1280px] h-[584] flex justify-center gap-3'>
                <div className='bg-[#2A254B] h-[478px] w-[630px]'>
                    <p className='text-white text-3xl font-extralight mt-10 ml-12'>
                        It started with a small idea
                    </p>
                    <p className='text-white flex mt-4 ml-12 mr-10 '>
                        A global brand with local beginnings, our story begain in a <br /> small studio in South London in early 2014
                    </p>
                    <div className="mt-56 ml-6">
                        <Button />
                    </div>
                </div>
                <div>
                    <Image src="/pictures/chair-1.jpg" alt='Table-pic' height={478} width={540}></Image>
                </div>
            </div>
            <div className='w-[1350px] h-[500px] flex justify-center ml-4'>
                <div>
                    <Image src="/pictures/jugar.jpg" alt="jugar" width={720} height={603}></Image>
                </div>
                <div className='w-[650px] h-[603px] ml-20 text-[#505977]'>
                    <p className='text-2xl mb-6'>From a studio in London to a global brand with <br />
                        over 400 outlets</p>
                    <p className='text-sm'>When we started Avion, the idea was simple. Make high quality furniture <br /> affordable and available
                        for the mass market
                    </p>
                    <p className='mt-4 text-sm'> Handmade, and lovingly crafted furniture and homeware is what we live, <br />
                        breathe and design so our Chelsea boutique become the hotbed for the <br /> London interior design community.
                    </p>
                    <div>
                        <button className='w-[170px] h-[56px] bg-[#F9F9F9] text-[#4E4D93] ml-10 mt-32 text-sm'>
                            Get in touch
                        </button>
                    </div>
                </div>
            </div>
            <div className='flex gap-10 ml-28 mr-24'>
                <div className='w-[305px] h-[220px]'>
                    <FaTruckFast className='ml-10 mt-10 size-6' />
                    <h3 className='ml-10 mt-4 text-[#2A254B]'>Next day as standard</h3>
                    <p className='ml-10 mt-2 text-sm mr-10 text-[#2A254B]'>Order before 3pm and get your order the next day as standard</p>
                </div>
                <div className='w-[305px] h-[220px]'>
                    <FaRegCircleCheck className='ml-10 mt-10 size-6' />
                    <h3 className='ml-10 mt-4 text-[#2A254B]'>Made by true artisans</h3>
                    <p className='ml-10 mt-2 text-sm mr-10 text-[#2A254B]'>Handmade crafted goods made with
                        real passion and craftmanship</p>
                </div>
                <div className='w-[305px] h-[220px] '>
                    <IoPricetagsOutline className='ml-10 mt-10 size-6' />
                    <h3 className='ml-10 mt-4 text-[#2A254B]'>Unbeatable prices</h3>
                    <p className='ml-10 mt-2 text-sm mr-10 text-[#2A254B]'>For our materials and quality you won’t find better prices anywhere</p>
                </div>
                <div className='w-[305px] h-[220px] '>
                    <PiFlowerTulip className='ml-10 mt-10 size-6' />
                    <h3 className='ml-10 mt-4 text-[#2A254B]'>Recycled packaging</h3>
                    <p className='ml-10 mt-2 text-sm mr-10 text-[#2A254B]'>We use 100% recycled packaging to ensure our footprint is manageable</p>
                </div>
            </div>
            <div className='w-[1273px] h-[364px] bg-white mt-10'>
                <div className='flex justify-center text-[#2A254B] text-3xl font-thin ml-20'>
                    <p>Join the club and get the benefits</p>
                </div>
                <div className='flex justify-center text-[#2A254B] text-sm ml-20 mt-5'>
                    <p>Sign up for our newsletter and receive exclusive offers on new <br />
                        <span className='ml-20 mt-2'> ranges, sales, pop up stores and more</span></p>
                </div>
                <div className='flex justify-center mt-16 ml-4'>
                    <div className='w-[354px] h-[56px] bg-[#F9F9F9] '>
                        <input type="email" placeholder='your@email.com' className='w-[117px] h-[22px] ml-10 mt-4 text-sm' />
                    </div>
                    <div>
                        <SignUp />
                    </div>
                </div>
            </div>
        </main>
    )
}
export default About