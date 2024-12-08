import Header from '@/components/header'
import React from 'react'
import Image from 'next/image'
import Button, { Btn, SignUp } from '@/components/button'
import { FaRegCircleCheck, FaTruckFast } from 'react-icons/fa6';
import { IoPricetagsOutline } from 'react-icons/io5';
import { PiFlowerTulip } from 'react-icons/pi';
const Home = () => {
  return (
    <main className='max-w-[1350px] justify-center'>
      <Header />
      <div className='w-[1280px] h-[584] flex justify-center'>
        <div className='bg-[#2A254B] h-[563px] w-[500px]'>
          <p className='text-white text-2xl font-extralight mt-10 ml-12'>
            The furniture brand for the <br className='mt-5 mb-4' /> future,with timeless designs
          </p>
          <Button />
          <p className='text-white mt-60 flex m-10 text-sm'>
            A new era in eco friendly furniture with Avelon, the French luxury retail brand
            with nice fonts, tasteful colors and a beautiful way to display things digitally
            using modern web technologies.
          </p>
        </div>
        <div>
          <Image src="/pictures/table.jpg" alt='Table-pic' height={584} width={450}></Image>
        </div>
      </div>
      <h2 className='flex justify-center text-xl text-[#2A254B] mt-14'>What makes our brand different</h2>
      <div className='flex gap-10 mt-6 ml-28 mr-24'>
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
      <h1 className='text-[#2A254B] ml-16 text-xl'>New ceramics</h1>
      <div className='flex justify-center gap-4 mt-8 ml-12'>
        <Image src='/pictures/table.jpg' alt="table" height={260} width={305}></Image>
        <Image src='/pictures/vase.jpg' alt="table" height={260} width={305}></Image>
        <Image src='/pictures/vase-1.jpg' alt="table" height={260} width={305}></Image>
        <Image src='/pictures/lamp.jpg' alt="table" height={260} width={305}></Image>
      </div>
      <div className='flex justify-around gap-20 mr-32 mt-4'>
        <div className='text-[#2A254B]'>
          <p>The Dandy chair</p>
          <span className='mt-3'>£250</span>
        </div>
        <div className='text-[#2A254B]'>
          <p>Rustic Vase Set</p>
          <span className='mt-3'>£155</span>
        </div>
        <div className='text-[#2A254B]'>
          <p>The Silky Vase</p>
          <span className='mt-3'>£125</span>
        </div>
        <div className='text-[#2A254B]'>
          <p>The Lucy Lamp</p>
          <span className='mt-3'>£399</span>
        </div>
      </div>
      <div className='flex justify-center mt-4'>
        <Btn />
      </div>
      <h3 className='text-[#2A254B] text-xl mt-10 ml-20'>Our popular products</h3>
      <div className='flex justify-center gap-6 mt-7 max-w-[1350px]'>
        <Image src="/pictures/sofa.jpg" alt='sofa' height={375} width={630} className='ml-20'></Image>
        <Image src="/pictures/table.jpg" alt='sofa' height={375} width={305}></Image>
        <Image src="/pictures/chair.jpg" alt='sofa' height={375} width={305}></Image>
      </div>
      <div className='flex justify-between gap-20 ml-20 mt-4 text-[#2A254B]'>
        <div>
          <p>The Poplar suede sofa</p>
          <span className='mt-3'>£980</span>
        </div>
        <div className='ml-72'>
          <p>The Dandy chair</p>
          <span className='mt-3'>£250</span>
        </div>
        <div className='mr-44'>
          <p>The Dandy chair</p>
          <span className='mt-3'>£250</span>
        </div>
      </div>
      <div className='flex justify-center mt-4'>
        <Btn />
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
      <div className='w-[1350px] h-[603px] flex justify-center'>
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
          <div>
            <Image src="/pictures/jugar.jpg" alt="jugar" width={700} height={603}></Image>
          </div>
      </div>
    </main>
  )
}
export default Home