import { CiSearch } from "react-icons/ci"
import { FaRegCircleCheck, FaTruckFast } from "react-icons/fa6"
import { FiX } from "react-icons/fi"
import { IoCartOutline, IoPersonCircleOutline, IoPricetagsOutline } from "react-icons/io5"
import Link from "next/link"
import Button, { Product, SignUp } from "@/components/button"
import Image from "next/image"
import { PiFlowerTulip } from "react-icons/pi"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { RxHamburgerMenu } from "react-icons/rx"



function About() {
    return (
        <main className="overflow-hidden">
            <div className="hidden lg:block">
                <div className='w-[1350px] h-[132px] items-center '>
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
                                <ul>Contact</ul>
                                <ul>Blog</ul>
                            </div>
                            <div className="flex gap-4 mt-1">
                                <CiSearch className='size-5' />
                                <Link href="/cart"><IoCartOutline className='size-5' /></Link>
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
            </div>
            <div className="block mt-3 mb-4 mx-4 lg:hidden">
                <div className="flex justify-between ">
                    <h2 className="text-3xl text-[#22202E] ml-7">
                        Avion
                    </h2>
                    <div className="flex gap-5 mr-4">
                        <CiSearch className="size-7 mt-1" />
                        <Sheet>
                            <SheetTrigger><RxHamburgerMenu className="size-6" />
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
            {/* Main Page Start from here */}
            <div className="hidden lg:block w-[1440px] h-[220px]">
                <div className="flex justify-around mt-20 mr-10">
                    <p className="text-3xl text-[#2A254B]">A brand built on the love of craftmanship,<br />
                        quality and outstanding customer service</p>
                    <div className="mr-20">
                        <Product />
                    </div>
                </div>
            </div>
            {/* For Mobile Screen */}
            <div className="block lg:hidden mt-8">
                <div className="flex flex-col justify-center items-center">
                    <p className="text-3xl text-[#2A254B]">A brand built on the <br /> love of craftmanship,<br />
                        quality and  <br />outstanding customer <br /> service</p>
                    <div className="mt-6">
                        <Product />
                    </div>
                </div>
            </div>
            {/* New Section Starts From here */}
            <div className="hidden lg:block">
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
                        <Image src="/pictures/chair-1.jpg" alt='Table-pic' height={478} width={540} priority></Image>
                    </div>
                </div>
            </div>
            {/* For Mobile Screen */}
            <div className='block lg:hidden'>
                <div className='bg-[#2A254B] h-[350px] mt-8 ml-6 mr-6'>
                    <p className='text-white text-3xl font-extralight pt-10 ml-12'>
                        It started with a small idea
                    </p>
                    <p className='text-white flex mt-4 ml-12 mr-10 '>
                        A global brand with local beginnings, our story begain in a <br /> small studio in South London in early 2014
                    </p>
                    <div className="flex justify-center mt-8">
                        <button className="w-[278px] h-[56px] bg-[#4E4D93] text-white">View Collection</button>
                    </div>
                </div>
                <div className="mt-5 ml-6 mr-6">
                    <Image src="/pictures/chair-1.jpg" alt='Table-pic' height={478} width={540}
                        priority></Image>
                </div>
            </div>
            {/* New Section Starts From here */}
            <div className="hidden lg:block">
                <div className='w-[1350px] h-[500px] flex justify-center ml-4 mb-6'>
                    <div className="">
                        <Image src="/pictures/sofa-1.jpg" alt="jugar" width={720} height={603} className="max-h-[500px] max-w-[700px]"></Image>
                    </div>
                    <div className='w-[650px] h-[603px] ml-20 text-[#505977]'>
                        <p className='text-2xl mb-6'>Our service isn’t just personal, it’s actually <br />
                            hyper personally exquisite</p>
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
            </div>
            {/* For Mobile Screen  */}
            <div className='block lg:hidden'>
                <div className="mt-8 ">
                    <Image src="/pictures/sofa-1.jpg" alt="jugar" width={500} height={400}
                        priority
                        className=" h-[350px]"></Image>
                </div>
                <div className=' h-[460px] ml-6 mr-6 mt-12 text-[#505977]'>
                    <p className='text-2xl mb-6'>Our service isn’t just personal, it’s actually <br />
                        hyper personally exquisite</p>
                    <p className='text-sm'>When we started Avion, the idea was simple. Make high quality furniture <br /> affordable and available
                        for the mass market
                    </p>
                    <p className='mt-4 text-sm'> Handmade, and lovingly crafted furniture and homeware is what we live, <br />
                        breathe and design so our Chelsea boutique become the hotbed for the <br /> London interior design community.
                    </p>
                    <div>
                        <button className='w-[342px] h-[56px] bg-[#F9F9F9] text-[#4E4D93] mt-10'>
                            Get in touch
                        </button>
                    </div>
                </div>
            </div>
            {/* New Section starts from here */}
            <div className="hidden lg:block">
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
            </div>
            {/* For Mobile Screen */}
            <div className="block lg:hidden">
                <h3 className="text-3xl text-[#2A254B] ml-8">What makes our brand different</h3>
            <div className='flex flex-col gap-7'>
                    <div className=' h-[220px] bg-[#F9F9F9]'>
                        <FaTruckFast className='ml-10 mt-10 size-6' />
                        <h3 className='ml-10 mt-4 text-[#2A254B]'>Next day as standard</h3>
                        <p className='ml-10 mt-2 text-sm mr-10 text-[#2A254B]'>Order before 3pm and get your order the next day as standard</p>
                    </div>
                    <div className='h-[220px] bg-[#F9F9F9]'>
                        <FaRegCircleCheck className='ml-10 mt-10 size-6' />
                        <h3 className='ml-10 mt-4 text-[#2A254B]'>Made by true artisans</h3>
                        <p className='ml-10 mt-2 text-sm mr-10 text-[#2A254B]'>Handmade crafted goods made with
                            real passion and craftmanship</p>
                    </div>
                    <div className='h-[220px] bg-[#F9F9F9]'>
                        <IoPricetagsOutline className='ml-10 mt-10 size-6' />
                        <h3 className='ml-10 mt-4 text-[#2A254B]'>Unbeatable prices</h3>
                        <p className='ml-10 mt-2 text-sm mr-10 text-[#2A254B]'>For our materials and quality you won’t find better prices anywhere</p>
                    </div>
                    <div className=' h-[220px] bg-[#F9F9F9]'>
                        <PiFlowerTulip className='ml-10 mt-10 size-6' />
                        <h3 className='ml-10 mt-4 text-[#2A254B]'>Recycled packaging</h3>
                        <p className='ml-10 mt-2 text-sm mr-10 text-[#2A254B]'>We use 100% recycled packaging to ensure our footprint is manageable</p>
                    </div>
                </div>
            </div>
            {/* Last Section Finally */}
            <div className="hidden lg:block">
            <div className='w-[1273px] h-[300px] bg-white mt-10'>
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
            </div>
            {/* For Mobile Screen */}
            <div>
            <div className=' h-[260px] bg-white mt-10'>
                <div className='flex justify-center text-[#2A254B] text-2xl  ml-4'>
                    <p>Join the club and get the benefits</p>
                </div>
                <div className='flex justify-center text-[#2A254B] text-sm  mt-5'>
                    <p>Sign up for our newsletter and receive exclusive offers on new <br />
                        <span className='ml-20 mt-2'> ranges, sales, pop up stores and more</span></p>
                </div>
                <div className='flex justify-center mt-16 ml-4'>
                    <div className='w-[324px] h-[56px] bg-[#F9F9F9] '>
                        <input type="email" placeholder='your@email.com' className='w-[117px] h-[22px] ml-10 mt-4 text-sm' />
                    </div>
                    <div>
                        <SignUp />
                    </div>
                </div>
            </div>
            </div>
        </main>
    )
}
export default About