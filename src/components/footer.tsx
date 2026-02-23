import React from 'react'
import { FaFacebookSquare, FaInstagram, FaLinkedin, FaPinterest, FaSkype, FaTwitter } from 'react-icons/fa';
import Link from "next/link";
const Footer = () => {
    return (
        <footer className="bg-[#2A254B] text-white text-sm py-10 px-6 overflow-hidden">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
                <div>
                    <h3 className="font-normal text-lg mb-3">Menu</h3>
                    <ul className="space-y-3">
                        <li>New arrivals</li>
                        <li>Best sellers</li>
                        <li>Recently viewed</li>
                        <li>Popular this week</li>
                        <li>All products</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-normal text-lg mb-3">Categories</h3>
                    <ul className="space-y-3">
                        <li>Crockery</li>
                        <li>Furniture</li>
                        <li>Homeware</li>
                        <li>Plant pots</li>
                        <li>Chairs</li>
                        <li>Ceramics</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-normal text-lg mb-3">Our company</h3>
                    <ul className="space-y-3">
                        <li><Link href="/about">About us</Link></li>
                        <li>Vacancies</li>
                        <li>Contact us</li>
                        <li>Privacy</li>
                        <li>Returns policy</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-yellow-500 font-semibold text-lg mb-3">Quick Links</h3>
                    <ul className="space-y-3">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/products">Products</Link></li>
                        <li><Link href="/cart">Cart</Link></li>
                    </ul>
                </div>
                <div className="col-span-2 md:col-span-4 lg:col-span-1">
                    <p className="mb-3 font-medium">Join our mailing list</p>
                    <div className="flex w-full">
                        <input
                            type="email"
                            placeholder="your@email.com"
                            className="flex-1 min-w-0 bg-[#4E4D93] placeholder-white px-4 py-3"
                        />
                        <button className="bg-[#F9F9F9] text-[#2A254B] px-6 py-3 font-medium whitespace-nowrap">
                            Sign up
                        </button>
                    </div>
                </div>
            </div>

            <hr className="border-[#4E4D93] mt-10" />

            <div className="flex flex-col sm:flex-row justify-between items-center mt-4 gap-4">
                <p>Copyright {new Date().getFullYear()} Avion LTD</p>
                <div className="flex gap-4">
                    <FaLinkedin className="fill-white size-5" />
                    <FaFacebookSquare className="fill-white size-5" />
                    <FaInstagram className="fill-white size-5" />
                    <FaSkype className="fill-white size-5" />
                    <FaTwitter className="fill-white size-5" />
                    <FaPinterest className="fill-white size-5" />
                </div>
            </div>
        </footer>
    )
}

export default Footer
