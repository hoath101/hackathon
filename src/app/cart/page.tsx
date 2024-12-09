import { CheckOut } from "@/components/button"
import Header from "@/components/header"
import Image from "next/image"

const Cart = () => {
  return (
    <main className="">
      <Header />
      <h1 className="text-2xl text-[#2A254B] mt-10 ml-32 mb-10">Your shopping cart</h1>
      <div className="flex justify-between ml-32 mr-32 mb-4">
        <ul className="text-[#2A254B] ">Product</ul>
        <ul className="text-[#2A254B]">Quantity</ul>
        <ul className="text-[#2A254B]">Total</ul>
      </div>
      <hr className="w-[1200px] ml-20 border-[#EBE8F4]" />
      <div className="flex justify-between ml-32 mr-32 mt-6 text-[#2A254B]">
        <div className="flex gap-6 w-[309px] h-[134px]">
          <Image src="/pictures/vase-1.jpg" alt="Vase Pic" width={109} height={134}></Image>
          <div>
            <h4>Graystone vase</h4>
            <p className="text-sm mt-3">A timeless ceramic vase with
              a tri color grey glaze.</p>
            <ul>£85</ul>
          </div>
        </div>
        <div className="mr-52 text-[">
          1
        </div>
        <div>
          £85
        </div>
      </div>
      <div className="flex justify-between ml-32 mr-32 mt-6 text-[#2A254B]">
        <div className="flex gap-6 w-[309px] h-[134px]">
          <Image src="/pictures/vase-1.jpg" alt="Vase Pic" width={109} height={134}></Image>
          <div>
            <h4>Graystone vase</h4>
            <p className="text-sm mt-3">A timeless ceramic vase with
              a tri color grey glaze.</p>
            <ul>£85</ul>
          </div>
        </div>
        <div className="mr-52 text-[">
          1
        </div>
        <div>
          £85
        </div>
      </div>
      <hr className="w-[1200px] ml-20 border-[#EBE8F4] mt-6" />
      <div className="flex justify-end gap-3 mr-24 mt-4 text-[#2A254B]">
        <h3>Subtotal</h3>
        <h5>£210</h5>
      </div>
      <div className="flex justify-end text-sm text-[#2A254B] mr-24 mt-3">
        <p>Taxes and shipping are calculated at checkout</p>
      </div>
      <div className="mr-24 flex justify-end mt-4">
        <CheckOut/>
      </div>
    </main>
  )
}

export default Cart