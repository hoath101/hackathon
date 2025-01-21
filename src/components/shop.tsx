import { Product } from '@/app/products/page'
import { client } from '@/sanity/lib/client'
import Image from 'next/image'
import React from 'react'
import { AddCart } from './button'

const Shop =async () => {
    const data:Product = await client.fetch(`*[_type == "product"]{
  _id,
  name,
  slug,
  "imageUrl": image.asset->url,
  price,
  quantity,
  dimensions,
}[0]`) 
  return (
    <main>
        <div className='w-[1350px] h-[500px] flex justify-center ml-4 mb-6'>
                        <div className="">
                            <Image src={data.imageUrl} alt={data.name} width={759} height={603} className="max-h-[500px] max-w-[700px] ml-4"></Image>
                        </div>
                        <div className='w-[602px] h-[657px] ml-20 '>
                            <div className="text-[#2A254B]">
                                <p className='text-2xl mb-8'>{data.name} <br />
                                    <span>£{data.price}</span>
                                </p>
                            </div>
                            <div>
                                <h2 className="mb-4 text-[#2A254B]">{data.description}</h2>
                                
                            </div>
                            <div className="w-[602px] h-[134px] mt-8">
                                <h4 className="text-[#2A254B] text-sm">Dimensions</h4>
                                
                            </div>
                            <div className="flex w-[602px] h-[115px] border-[#CAC6DA] gap-28">
                                <div className="w-[209px] h-[46px] flex gap-4 ">
                                    <p className="text-[#2A254B]">{data.price}</p>
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
    </main>
  )
}

export default Shop