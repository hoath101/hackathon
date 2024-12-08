import React from 'react'
import { FaFacebookSquare, FaInstagram, FaLinkedin, FaPinterest, FaSkype, FaTwitter } from 'react-icons/fa';
import Link from "next/link";
const Footer = () => {
    return (
        <main className='w-[1440] h-[380px] bg-[#2A254B] text-white text-sm mt-6'>
            <div className='flex justify-around gap-6'>
                <div className='mt-10 mb-20'>
                    <ul>Menu</ul>
                    <ul className='mt-3'>New arrivals</ul>
                    <ul className='mt-3'>Best sellers</ul>
                    <ul className='mt-3'>Recently viewed</ul>
                    <ul className='mt-3'>Popular this week</ul>
                    <ul className='mt-3'>All products</ul>
                </div>
                <div className='mt-10'>
                    <ul>Categories</ul>
                    <ul className='mt-3'>Crockery</ul>
                    <ul className='mt-3'>Furniture</ul>
                    <ul className='mt-3'>Homeware</ul>
                    <ul className='mt-3'>Plant pots</ul>
                    <ul className='mt-3'>Chairs</ul>
                    <ul className='mt-3'>Crockery</ul>
                </div>
                <div className='mt-10'>
                    <ul>Our company</ul>
                    <ul className='mt-3'><Link href="/about">About us</Link></ul>
                    <ul className='mt-3'>Vacancies</ul>
                    <ul className='mt-3'>Contact us</ul>
                    <ul className='mt-3'>Privacy</ul>
                    <ul className='mt-3'>Returns policy</ul>
                </div>
                <div className='mt-10'>
                    <p>Join our mailing list</p>
                    <div className='flex'>
                        <div className='w-[400px] h-[56px] bg-[#4E4D93] mt-4'>
                            <input type="email" placeholder='your@email.com' 
                            className='w-[117px] h-[22px] ml-10 mt-4 bg-[#4E4D93]'/>
                        </div>
                        <div>
                            <button className='w-[118px] h-[56px] text-[#2A254B] bg-[#F9F9F9] mr-20 mt-4'>
                                Sign up
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='w-[1277] ml-10 fill-[#4E4D93]'/>
            <div className='flex justify-between mt-4 ml-10'>
                <p>Copyright 2022 Avion LTD</p>
                <div className='flex gap-4 mr-40'>
                    <ul><FaLinkedin className='fill-white size-5'/></ul>
                    <ul><FaFacebookSquare className='fill-white size-5'/></ul>
                    <ul><FaInstagram className='fill-white size-5'/></ul>
                    <ul><FaSkype className='fill-white size-5'/></ul>
                    <ul><FaTwitter className='fill-white size-5'/></ul>
                    <ul><FaPinterest className='fill-white size-5'/></ul>
                </div>
            </div>
        </main>
    )
}

export default Footer