import Header from '@/components/header'
import React from 'react'
import Image from 'next/image'
import Button, { Btn, SignUp } from '@/components/button'
import { FaRegCircleCheck, FaTruckFast } from 'react-icons/fa6';
import { IoPricetagsOutline } from 'react-icons/io5';
import { PiFlowerTulip } from 'react-icons/pi';
import { Ceramics } from '@/components/sanityProducts';

const Home = () => {
  return (
    <main className='max-w-max mx-auto p-2 overflow-hidden'>
      <Header />
      <div className='flex justify-center items-center'>
        <div className=''>
          <div className='bg-[#2A254B] h-[563px] w-full md:w-[563px] flex flex-col justify-start items-start p-7'>
            <p className='text-white text-2xl font-extralight '>
              The furniture brand for the <br className='mt-5 mb-4' />
              future, with timeless designs
            </p>
            <Button />
            <p className='text-white mt-60 text-sm'>
              A new era in eco-friendly furniture with Avelon, the French luxury retail brand
              with nice fonts, tasteful colors, and a beautiful way to display things digitally
              using modern web technologies.
            </p>
          </div>
        </div>

        <div className='hidden lg:block'>
          <Image
            src="/pictures/table.jpg"
            alt="Table-pic"
            height={563}
            width={450}
            className='h-[563px] w-[450px]'
          />
        </div>
      </div>

      <h2 className='text-center text-xl text-[#2A254B] mt-14'>What makes our brand different</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
  <div className="flex flex-col ml-4 w-[300px]">
    <FaTruckFast className="text-[#2A254B] text-3xl" />
    <h3 className="mt-4 text-[#2A254B]">Next day as standard</h3>
    <p className="mt-2 text-sm text-[#2A254B]">
      Order before 3pm and get your order the next day as standard
    </p>
  </div>
  
  <div className="flex flex-col ml-4 w-[300px]">
    <FaRegCircleCheck className="text-[#2A254B] text-3xl " />
    <h3 className="mt-4 text-[#2A254B]">Made by true artisans</h3>
    <p className="mt-2 text-sm text-[#2A254B] ">
      Handmade crafted goods made with real passion and craftsmanship
    </p>
  </div>
  
  <div className="flex flex-col ml-4 w-[300px]">
    <IoPricetagsOutline className="text-[#2A254B] text-3xl " />
    <h3 className="mt-4 text-[#2A254B]">Unbeatable prices</h3>
    <p className="mt-2 text-sm text-[#2A254B] ">
      For our materials and quality, you won’t find better prices anywhere
    </p>
  </div>
  
  <div className="flex flex-col ml-4 w-[300px]">
    <PiFlowerTulip className="text-[#2A254B] text-3xl " />
    <h3 className="mt-4 text-[#2A254B]">Recycled packaging</h3>
    <p className="mt-2 text-sm text-[#2A254B] ">
      We use 100% recycled packaging to ensure our footprint is manageable
    </p>
  </div>
</div>

      <h1 className='text-[#2A254B] text-xl mt-14 ml-4 lg:ml-16'>New ceramics</h1>
      <div className='grid sm:grid-cols-1 lg:grid-cols-4 gap-4 mt-5 ml-7'>
        <div className='text-[#2A254B] '>
          <Image src='/pictures/table.jpg' alt="table" height={375} width={305} 
          className=' h-[375px] '
          />
          <p>The Dandy chair</p>
          <span className='mt-3'>£250</span>
        </div>
        <div className='text-[#2A254B] '>
          <Image src='/pictures/vase.jpg' alt="vase" height={375} width={305} 
          className=' h-[375px]'
          />
          <p>Rustic Vase Set</p>
          <span className='mt-3'>£155</span>
        </div>
        <div className='text-[#2A254B] '>
          <Image src='/pictures/vase-1.jpg' alt="vase" height={375} width={305} 
          className='h-[375px]'
          />
          <p>The Silky Vase</p>
          <span className='mt-3'>£125</span>
        </div>
        <div className='text-[#2A254B] '>
          <Image src='/pictures/lamp.jpg' alt="lamp" height={375} width={305} 
          className='h-[375px]'
          />
          <p>The Lucy Lamp</p>
          <span className='mt-3'>£399</span>
        </div>
      </div>

      <div className='flex justify-center mt-4'>
        <Btn />
      </div>

      <h3 className='text-[#2A254B] text-xl mt-10 ml-4 lg:ml-20'>Our popular products</h3>
      <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-7 '>
        <div className='ml-4'>
          <Image
            src="/pictures/sofa.jpg"
            alt='sofa'
            height={375}
            width={630}
            className=' w-auto h-auto'
          />
          <p className='mt-3'>The Poplar suede sofa</p>
          <span className='mt-3'>£980</span>
        </div>
        <div className='ml-4'>
          <Image
            src="/pictures/table.jpg"
            alt='table'
            height={375}
            width={305}
            className='h-[375px]'
          />
          <p className='mt-3'>The Dandy chair</p>
          <span className='mt-3'>£250</span>
        </div>
        <div className='ml-4'>
          <Image
            src="/pictures/chair.jpg"
            alt='chair'
            height={375}
            width={305}
            className='h-[375px]'
          />
          <p className='mt-3'>The Dandy chair</p>
          <span className='mt-3'>£250</span>
        </div>
      </div>
 

      <div className='flex justify-center mt-4'>
        <Btn />
      </div>

      <div className='w-full bg-white mt-10'>
        <div className='text-center text-[#2A254B] text-3xl font-thin'>
          <p>Join the club and get the benefits</p>
        </div>
        <div className='text-center text-[#2A254B] text-sm mt-5'>
          <p>Sign up for our newsletter and receive exclusive offers on new <br />
            ranges, sales, pop-up stores, and more
          </p>
        </div>
        <div className='flex justify-center mt-10'>
          <div className='w-[354px] h-[56px] bg-[#F9F9F9] flex items-center'>
            <input type="email" placeholder='your@email.com' className='w-full p-4 text-sm' />
          </div>
          <div>
            <SignUp />
          </div>
        </div>
      </div>

      <div className='w-full bg-[#F9F9F9] mt-10'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-14'>
          <div className='w-full lg:w-[650px] text-[#505977] mt-10 ml-6 mr-10'>
            <p className='text-2xl mb-6'>From a studio in London to a global brand with over 400 outlets</p>
            <p className='text-sm '>
              When we started Avion, the idea was simple. Make high quality furniture affordable and available
              for the mass market.
            </p>
            <p className='mt-4 text-sm'>
              Handmade, and lovingly crafted furniture and homeware is what we live, breathe, and design so our Chelsea boutique
              became the hotbed for the London interior design community.
            </p>
            <div>
              <button className='w-[170px] h-[56px] bg-[#F9F9F9] text-[#4E4D93] mt-8'>
                Get in touch
              </button>
            </div>
          </div>
          <div className='ml-5'>
            <Image src="/pictures/jugar.jpg" alt="jugar" width={700} height={603} />
          </div>
        </div>
      </div>
    </main>
  )
}
export default Home;
