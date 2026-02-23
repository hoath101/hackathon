import { Metadata } from "next"
import { AddCart, Btn, SignUp } from "@/components/button"
import Header from "@/components/header"
import Image from "next/image"
import Link from "next/link"
import { FaRegCircleCheck, FaTruckFast } from "react-icons/fa6"
import { IoPricetagsOutline } from "react-icons/io5"
import { PiFlowerTulip } from "react-icons/pi"

export const metadata: Metadata = {
  title: "The Dandy Chair | Avion",
  description: "A timeless design with premium materials. The Dandy Chair — handcrafted with beech legs and lambskin leather upholstery.",
}

const Products = () => {
    return (
        <main className="overflow-x-hidden">
            <Header />
            {/* Main Page Starts from here */}
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 px-4 mb-10">
                <div className="flex justify-center">
                    <Image
                        src="/pictures/chair-2.jpg"
                        alt="The Dandy Chair product image"
                        width={759}
                        height={603}
                        className="w-full max-w-[700px] max-h-[500px] h-auto rounded-md lg:w-[470px] lg:ml-40"
                    />
                </div>
                <div className="w-full max-w-xl text-[#2A254B]">
                    <p className="text-2xl mb-4">
                        The Dandy Chair <br />
                        <span className="text-lg text-[#505977]">£250</span>
                    </p>
                    <h2 className="mb-2">Description</h2>
                    <p className="mb-4 text-[#505977] text-sm">
                        A timeless design, with premium materials features as one of our most popular
                        and iconic pieces. The dandy chair is perfect for any stylish living space with
                        beech legs and lambskin leather upholstery.
                    </p>
                    <ul className="mb-6 space-y-1">
                        <li className="text-[#505977] text-sm">Premium material</li>
                        <li className="text-[#505977] text-sm">Handmade upholstery</li>
                        <li className="text-[#505977] text-sm">Quality timeless classic</li>
                    </ul>
                    <div className="mb-8">
                        <h4 className="text-sm">Dimensions</h4>
                        <div className="grid grid-cols-3 gap-4 text-sm mt-3">
                            <div>
                                <h4>Height</h4>
                                <p className="text-[#505977] mt-1">110cm</p>
                            </div>
                            <div>
                                <h4>Width</h4>
                                <p className="text-[#505977] mt-1">75cm</p>
                            </div>
                            <div>
                                <h4>Depth</h4>
                                <p className="text-[#505977] mt-1">50cm</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between border-t pt-4">
                        <div className="flex items-center gap-4">
                            <p>Amount</p>
                            <div className="w-36 h-10 bg-[#F9F9F9] flex justify-between items-center px-4 rounded">
                                <span className="text-[#CAC6DA] cursor-pointer">-</span>
                                <span>1</span>
                                <span className="text-[#CAC6DA] cursor-pointer">+</span>
                            </div>
                        </div>
                        <AddCart />
                    </div>
                </div>
            </div>

            {/* You might also like — single responsive grid */}
            <div className="px-4 lg:px-12 mt-12">
                <h2 className="text-2xl lg:text-3xl mb-6 lg:ml-16">You might also like</h2>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="text-[#2A254B]">
                        <Image
                            src="/pictures/table.jpg"
                            alt="The Dandy Chair"
                            height={375}
                            width={305}
                            className="w-full h-auto object-cover"
                        />
                        <p className="mt-3">The Dandy chair</p>
                        <span>£250</span>
                    </div>
                    <div className="text-[#2A254B]">
                        <Image
                            src="/pictures/vase.jpg"
                            alt="Rustic Vase Set"
                            height={375}
                            width={305}
                            className="w-full h-auto object-cover"
                        />
                        <p className="mt-3">Rustic Vase Set</p>
                        <span>£155</span>
                    </div>
                    <div className="text-[#2A254B]">
                        <Image
                            src="/pictures/vase-1.jpg"
                            alt="The Silky Vase"
                            height={375}
                            width={305}
                            className="w-full h-auto object-cover"
                        />
                        <p className="mt-3">The Silky Vase</p>
                        <span>£125</span>
                    </div>
                    <div className="text-[#2A254B]">
                        <Image
                            src="/pictures/lamp.jpg"
                            alt="The Lucy Lamp"
                            height={375}
                            width={305}
                            className="w-full h-auto object-cover"
                        />
                        <p className="mt-3">The Lucy Lamp</p>
                        <span>£399</span>
                    </div>
                </div>
                <div className="flex justify-center mt-6">
                    <Link href="/products"><Btn /></Link>
                </div>
            </div>

            {/* What makes our brand different — single responsive grid */}
            <div className="flex justify-center mt-10 mb-6">
                <h2 className="text-2xl text-[#2A254B]">What makes our brand different</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-6 lg:px-10 mb-10">
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
                            className="flex-1 bg-gray-200 placeholder-[#2A254B] px-4 py-4 text-sm"
                        />
                        <SignUp />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Products
