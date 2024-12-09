import { AddCart, Btn, SignUp } from "@/components/button"
import Image from "next/image"
import Link from "next/link"
import { CiSearch } from "react-icons/ci"
import { FaRegCircleCheck, FaTruckFast } from "react-icons/fa6"
import { FiX } from "react-icons/fi"
import { IoCartOutline, IoPersonCircleOutline, IoPricetagsOutline } from "react-icons/io5"
import { PiFlowerTulip } from "react-icons/pi"

const Products = () => {
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
                    <h2 className='text-[#22202E] m-4 text-xl ml-10'>Avion</h2>
                    <div className='flex justify-center gap-9 m-4 mr-10'>
                        <ul className='text-[#726E8D]'>Plantpots</ul>
                        <ul className='text-[#726E8D]'>Ceramics</ul>
                        <ul className='text-[#726E8D]'>Tables</ul>
                        <ul className='text-[#726E8D]'>Chairs</ul>
                        <ul className='text-[#726E8D]'>Crokery</ul>
                        <ul className='text-[#726E8D]'>Tableware</ul>
                        <ul className='text-[#726E8D]'>Cutlery</ul>
                    </div>
                    <div className='flex m-4 gap-3 mr-4 '>
                        <div className="flex gap-4 ">
                            <CiSearch className='size-5' />
                            <Link href="/cart"><IoCartOutline className='size-5' /></Link>
                            <IoPersonCircleOutline className='size-5' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[1350px] h-[500px] flex justify-center ml-4 mb-6'>
                <div className="">
                    <Image src="/pictures/chair-2.jpg" alt="jugar" width={759} height={603} className="max-h-[500px] max-w-[700px] ml-4"></Image>
                </div>
                <div className='w-[602px] h-[657px] ml-20 '>
                    <div className="text-[#2A254B]">
                        <p className='text-2xl mb-8'>The Dandy Chair <br />
                            <span>£250</span>
                        </p>
                    </div>
                    <div>
                        <h2 className="mb-4 text-[#2A254B]">Description</h2>
                        <p className="mb-4 text-[#505977] text-sm w-[450px]">
                            A timeless design, with premium materials features as one of our most popular and iconic pieces.
                            The dandy chair is perfect for any stylish <br /> living space with beech legs and lambskin leather upholstery.
                        </p>
                        <li className="text-[#505977] text-sm">Premium material</li>
                        <li className="text-[#505977] text-sm">Handmade upholstery</li>
                        <li className="text-[#505977] text-sm">Quality timeless classic</li>
                    </div>
                    <div className="w-[602px] h-[134px] mt-8">
                        <h4 className="text-[#2A254B] text-sm">Dimensions</h4>
                        <div className="flex gap-10 text-sm mt-5">
                            <div>
                                <h4 className="text-[#2A254B]">
                                    Height
                                </h4>
                                <p className="text-[#505977] mt-3">
                                    110cm
                                </p>
                            </div>
                            <div>
                                <h4 className="text-[#2A254B]">
                                    Width
                                </h4>
                                <p className="text-[#505977] mt-3">
                                    75cm
                                </p>
                            </div>
                            <div>
                                <h4 className="text-[#2A254B]">
                                    Depth
                                </h4>
                                <p className="text-[#505977] mt-3">
                                    50cm
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-[602px] h-[115px] border-[#CAC6DA] gap-28">
                        <div className="w-[209px] h-[46px] flex gap-4 ">
                            <p className="text-[#2A254B]">Amount</p>
                            <div className="w-[122px] h-[46px] fill-[#F9F9F9] flex justify-between">
                                <p className="text-[#CAC6DA] ml-4">-</p>
                                <p className="text-[#2A254B]"> 1</p>
                                <p className="text-[#CAC6DA] mr-4"> +</p>
                            </div>
                        </div>
                        <AddCart />
                    </div>
                </div>
            </div>
            <div className="w-[1440px] h-[761px]">
                <h2 className="text-3xl ml-10 mt-20">You might also like</h2>
                <div className='flex gap-6 mt-8 ml-10'>
                    <Image src='/pictures/table.jpg' alt="table" height={375} width={305}></Image>
                    <Image src='/pictures/vase.jpg' alt="table" height={375} width={305}></Image>
                    <Image src='/pictures/vase-1.jpg' alt="table" height={375} width={305}></Image>
                    <Image src='/pictures/lamp.jpg' alt="table" height={375} width={305}></Image>
                </div>
                <div className='flex justify-between gap-20 mr-32 mt-4 ml-10'>
                    <div className='text-[#2A254B]'>
                        <p>The Dandy chair</p>
                        <span className='mt-3'>£250</span>
                    </div>
                    <div className='text-[#2A254B] mr-8 ml-4'>
                        <p>Rustic Vase Set</p>
                        <span className='mt-3'>£155</span>
                    </div>
                    <div className='text-[#2A254B] mr-10'>
                        <p>The Silky Vase</p>
                        <span className='mt-3'>£125</span>
                    </div>
                    <div className='text-[#2A254B] mr-44'>
                        <p>The Lucy Lamp</p>
                        <span className='mt-3'>£399</span>
                    </div>
                </div>
                <div className='flex justify-center mt-4 mr-32'>
                    <Btn />
                </div>
            </div>
            <div className="flex justify-center">
                <h2 className="text-2xl text-[#2A254B]">
                    What makes our brand different</h2>
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
        </main>
    )
}

export default Products