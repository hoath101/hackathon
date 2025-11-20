import React from 'react'
import { FaFacebookSquare, FaInstagram, FaLinkedin, FaPinterest, FaSkype, FaTwitter } from 'react-icons/fa';
import Link from "next/link";
const Footer = () => {
    return (
        <main>
            <div className='hidden lg:block overflow-hidden'>
                <div className='max-w-screen-2xl h-[380px] bg-[#2A254B] text-white text-sm'>
                    <div className='flex justify-around gap-6'>
                        <div className='mt-10 mb-20'>
                            <ul className='font-normal text-lg'>Menu</ul>
                            <ul className='mt-3'>New arrivals</ul>
                            <ul className='mt-3'>Best sellers</ul>
                            <ul className='mt-3'>Recently viewed</ul>
                            <ul className='mt-3'>Popular this week</ul>
                            <ul className='mt-3 mb-3'>All products</ul>
                        </div>
                        <div className='mt-10'>
                            <ul className='font-normal text-lg'>Categories</ul>
                            <ul className='mt-3'>Crockery</ul>
                            <ul className='mt-3'>Furniture</ul>
                            <ul className='mt-3'>Homeware</ul>
                            <ul className='mt-3'>Plant pots</ul>
                            <ul className='mt-3'>Chairs</ul>
                            <ul className='mt-3'>Crockery</ul>
                        </div>
                        <div className='mt-10'>
                            <ul className='font-normal text-lg'>Our company</ul>
                            <ul className='mt-3'><Link href="/about">About us</Link></ul>
                            <ul className='mt-3'>Vacancies</ul>
                            <ul className='mt-3'>Contact us</ul>
                            <ul className='mt-3'>Privacy</ul>
                            <ul className='mt-3'>Returns policy</ul>
                        </div>
                        <div className='mt-10'>
                            <h3 className="text-yellow-500 font-semibold text-lg mb-3">Quick Links</h3>
                            <ul className="space-y-3">
                                <li><Link href="/">Home</Link></li>
                                <li><Link href="/about">About</Link></li>
                                <li><Link href="/products">Products</Link></li>
                                <li><Link href="/cart">Cart</Link></li>
                            </ul>
                        </div>
                        <div className='mt-10'>
                            <p>Join our mailing list</p>
                            <div className='flex'>
                                <div className='w-[400px] h-[56px] bg-[#4E4D93] mt-4'>
                                    <input type="email" placeholder='your@email.com'
                                        className='w-[117px] h-[22px] ml-10 mt-4 bg-[#4E4D93]' />
                                </div>
                                <div>
                                    <button className='w-[118px] h-[56px] text-[#2A254B] bg-[#F9F9F9] mr-20 mt-4'>
                                        Sign up
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className='w-[1277] ml-10 fill-[#4E4D93]' />
                    <div className='flex justify-between mt-4 ml-10'>
                        <p>Copyright 2022 Avion LTD</p>
                        <div className='flex gap-4 mr-40'>
                            <ul><FaLinkedin className='fill-white size-5' /></ul>
                            <ul><FaFacebookSquare className='fill-white size-5' /></ul>
                            <ul><FaInstagram className='fill-white size-5' /></ul>
                            <ul><FaSkype className='fill-white size-5' /></ul>
                            <ul><FaTwitter className='fill-white size-5' /></ul>
                            <ul><FaPinterest className='fill-white size-5' /></ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* For mobile screen */}

            <div className="block lg:hidden w-full overflow-hidden">
                <div className="bg-[#2A254B] text-white text-sm py-10 px-6">
                    <div className="grid grid-cols-2 gap-10">
                        <div>
                            <h3 className="font-semibold text-base mb-4">Menu</h3>
                            <ul className="space-y-3">
                                <li>New arrivals</li>
                                <li>Best sellers</li>
                                <li>Recently viewed</li>
                                <li>Popular this week</li>
                                <li>All products</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold text-base mb-4">Categories</h3>
                            <ul className="space-y-3">
                                <li>Crockery</li>
                                <li>Furniture</li>
                                <li>Homeware</li>
                                <li>Plant pots</li>
                                <li>Chairs</li>
                                <li>Crockery</li>
                            </ul>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-10 mt-10">
                        <div>
                            <h3 className="font-semibold text-base mb-4">Our Company</h3>
                            <ul className="space-y-3">
                                <li><Link href="/about">About us</Link></li>
                                <li>Vacancies</li>
                                <li>Contact us</li>
                                <li>Privacy</li>
                                <li>Returns policy</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-yellow-500 font-semibold text-lg mb-4">Quick Links</h3>
                            <ul className="space-y-3">
                                <li><Link href="/">Home</Link></li>
                                <li><Link href="/about">About</Link></li>
                                <li><Link href="/products">Products</Link></li>
                                <li><Link href="/cart">Cart</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-12">
                        <p className="mb-3 font-medium">Join our mailing list</p>

                        <div className="flex w-full">
                            <input
                                type="email"
                                placeholder="your@email.com"
                                className="flex-1 bg-[#4E4D93] placeholder-white px-4 py-3"
                            />
                            <button className="bg-[#F9F9F9] text-[#2A254B] px-6 py-3 font-medium">
                                Sign up
                            </button>
                        </div>
                    </div>
                    <hr className="border-[#4E4D93] mt-10" />
                    <div className="flex justify-center mt-4">
                        <p className="text-white text-xs">Copyright 2022 Avion LTD</p>
                    </div>
                </div>
            </div>

        </main>
    )
}

export default Footer