import { Metadata } from "next"
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

export const metadata: Metadata = {
  title: "About Us | Avion",
  description: "Learn about Avion — a brand built on the love of craftsmanship, quality and outstanding customer service.",
}

function About() {
    return (
        <main className="overflow-x-hidden">
            {/* Desktop Nav */}
            <div className="hidden lg:block">
                <div className="h-[132px] items-center">
                    <div className="h-[41px] bg-[#2A254B] text-white flex justify-end gap-4 text-sm">
                        <FaTruckFast className="fill-white mt-4" />
                        <p className="mt-3 flex-1 text-center">
                            Free delivery on all orders over £50 with code easter checkout
                        </p>
                        <FiX className="fill-white text-xl mt-3 ml-10 mr-10" />
                    </div>
                    <div className="flex justify-between">
                        <h2 className="text-[#22202E] m-4 text-xl">Avion</h2>
                        <div className="flex m-4 gap-3 mr-4">
                            <div className="text-[#22202E] flex gap-6 mr-8">
                                <Link href="/about">About us</Link>
                                <ul>Contact</ul>
                                <ul>Blog</ul>
                            </div>
                            <div className="flex gap-4 mt-1">
                                <CiSearch className="size-5" />
                                <Link href="/cart"><IoCartOutline className="size-5" /></Link>
                                <IoPersonCircleOutline className="size-5" />
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="flex justify-center gap-9 m-4">
                        <ul className="text-[#726E8D]">Plantpots</ul>
                        <ul className="text-[#726E8D]">Ceramics</ul>
                        <ul className="text-[#726E8D]">Tables</ul>
                        <ul className="text-[#726E8D]">Chairs</ul>
                        <ul className="text-[#726E8D]">Crockery</ul>
                        <ul className="text-[#726E8D]">Tableware</ul>
                        <ul className="text-[#726E8D]">Cutlery</ul>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            <div className="block mt-3 mb-4 mx-4 lg:hidden">
                <div className="flex justify-between">
                    <h2 className="text-3xl text-[#22202E] ml-7">Avion</h2>
                    <div className="flex gap-5 mr-4">
                        <CiSearch className="size-7 mt-1" />
                        <Sheet>
                            <SheetTrigger><RxHamburgerMenu className="size-6" />
                                <SheetContent className="w-[250px]">
                                    <SheetTitle className="hidden"></SheetTitle>
                                    <ul className="grid grid-col-1 justify-center items-center mt-7 gap-5">
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

            {/* Hero — responsive */}
            <div className="flex flex-col lg:flex-row justify-center lg:justify-around items-center lg:items-start mt-8 lg:mt-20 px-6 gap-6 pb-8">
                <p className="text-2xl lg:text-3xl text-[#2A254B] text-center lg:text-left">
                    A brand built on the love of craftsmanship,<br className="hidden lg:block" />
                    quality and outstanding customer service
                </p>
                <div className="mt-2 lg:mt-0">
                    <Product />
                </div>
            </div>

            {/* It started with a small idea — responsive */}
            <div className="flex flex-col lg:flex-row justify-center gap-3 mt-8 px-6 lg:px-0">
                <div className="bg-[#2A254B] w-full lg:w-[630px] lg:h-[478px] px-6 lg:px-12 py-10">
                    <p className="text-white text-3xl font-extralight">It started with a small idea</p>
                    <p className="text-white mt-4 mr-4">
                        A global brand with local beginnings, our story began in a small studio in South London in early 2014
                    </p>
                    <div className="mt-10 lg:mt-56">
                        <Button />
                    </div>
                </div>
                <div className="w-full lg:w-auto">
                    <Image
                        src="/pictures/chair-1.jpg"
                        alt="Avion chair design"
                        height={478}
                        width={540}
                        className="w-full h-auto"
                        priority
                    />
                </div>
            </div>

            {/* Our service — responsive */}
            <div className="flex flex-col lg:flex-row justify-end mb-6 gap-6 lg:gap-16 px-6 mt-8">
                <div className="flex-shrink-0">
                    <Image
                        src="/pictures/sofa-1.jpg"
                        alt="Avion brand story"
                        width={720}
                        height={603}
                        className="w-full lg:max-h-[500px] lg:max-w-[700px] h-auto"
                    />
                </div>
                <div className="text-[#505977] lg:w-[650px]">
                    <p className="text-2xl mb-6">
                        Our service isn&apos;t just personal, it&apos;s actually hyper personally exquisite
                    </p>
                    <p className="text-sm">
                        When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market
                    </p>
                    <p className="mt-4 text-sm">
                        Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.
                    </p>
                    <div>
                        <button className="w-[170px] h-[56px] bg-[#F9F9F9] text-[#4E4D93] mt-10 text-sm">
                            Get in touch
                        </button>
                    </div>
                </div>
            </div>

            {/* What makes our brand different — responsive */}
            <div className="px-4 lg:px-10 mt-8">
                <h3 className="text-3xl text-[#2A254B] mb-6 lg:hidden">What makes our brand different</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-[#F9F9F9] p-8 min-h-[220px]">
                        <FaTruckFast className="size-6" />
                        <h3 className="mt-4 text-[#2A254B]">Next day as standard</h3>
                        <p className="mt-2 text-sm text-[#2A254B]">Order before 3pm and get your order the next day as standard</p>
                    </div>
                    <div className="bg-[#F9F9F9] p-8 min-h-[220px]">
                        <FaRegCircleCheck className="size-6" />
                        <h3 className="mt-4 text-[#2A254B]">Made by true artisans</h3>
                        <p className="mt-2 text-sm text-[#2A254B]">Handmade crafted goods made with real passion and craftsmanship</p>
                    </div>
                    <div className="bg-[#F9F9F9] p-8 min-h-[220px]">
                        <IoPricetagsOutline className="size-6" />
                        <h3 className="mt-4 text-[#2A254B]">Unbeatable prices</h3>
                        <p className="mt-2 text-sm text-[#2A254B]">For our materials and quality you won&apos;t find better prices anywhere</p>
                    </div>
                    <div className="bg-[#F9F9F9] p-8 min-h-[220px]">
                        <PiFlowerTulip className="size-6" />
                        <h3 className="mt-4 text-[#2A254B]">Recycled packaging</h3>
                        <p className="mt-2 text-sm text-[#2A254B]">We use 100% recycled packaging to ensure our footprint is manageable</p>
                    </div>
                </div>
            </div>

            {/* Newsletter — responsive */}
            <div className="bg-white mt-10 py-12 px-6">
                <div className="flex flex-col items-center text-[#2A254B]">
                    <p className="text-2xl lg:text-3xl font-thin text-center">Join the club and get the benefits</p>
                    <p className="text-sm mt-5 text-center">
                        Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more
                    </p>
                    <div className="flex mt-10 w-full max-w-lg">
                        <input
                            type="email"
                            placeholder="your@email.com"
                            className="flex-1 bg-[#F9F9F9] placeholder-[#2A254B] px-4 py-4 text-sm"
                        />
                        <SignUp />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default About
