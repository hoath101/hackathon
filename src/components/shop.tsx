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
}`) 
  return (
    <main>
    
    </main>
  )
}

export default Shop