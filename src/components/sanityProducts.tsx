import { client } from "@/sanity/lib/client"
import { Link } from "lucide-react"
import Image from "next/image"
interface Ceramics{
    name:string;
    imageUrl:string;
    price:number;
}

export const Ceramics = async () => {
    const data:Ceramics[] = await client.fetch(`*[_type == "product" && category->name == "Ceramics"]{
  image,
  name,
  price
}`)
    return (
        <div>
            {
            data.map((data, index) => {
              return (
                <Link key={index} href={"/product"}>
                  <div className='text-center flex gap-6 justify-center'>
                    <Image src={data.imageUrl} alt={data.name} height={280} width={200}
                      className="w-[285px] h-[280px] object-cover"></Image>
                    <div className="p-2">
                      <h2 className='text-2xl mb-3 mt-2'>
                        {data.name}
                      </h2>
                      <p className=''>
                        ${data.price}
                      </p>
                    </div>
                  </div>
                </Link>
              )
            })
          }
        </div>
    )
}

