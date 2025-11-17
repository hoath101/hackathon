import Header from "@/components/header"
import Image from "next/image"

const Cart = () => {
  return (
    <main className="">
      <Header />
      <div className="bg-[#F9F9F9]">
      <h1 className="pt-12 ml-12 lg:ml-64 text-2xl text-[#2A254B] font-light ">Your Shopping Cart</h1>
      <div className="flex justify-around ml-10 mr-10 mt-10 items-center text-[#2A254B]">
        <ul>Product</ul>
        <ul>Quantity</ul>
        <ul>Total</ul>
      </div>
        <hr className="mb-4 border-[#EBE8F4] mt-3 ml-10 mr-52 lg:ml-56"/>
        <div className="flex justify-around text-[#2A254B] mr-16">
          <div className="flex gap-4 w-[309px] h-[120px]">
            <Image
            src="/pictures/vase-1.jpg"
            alt="Vase-image"
            width={109}
            height={134}
            />
            <div>
              <h3 className="mt-2 text-lg">Graystone vase</h3>
              <p className="text-xs mt-2 mb-3">A timeless ceramic vase with a tri color grey glaze.</p>
              <ul>£85</ul>
            </div>
          </div>
          <div>
            1
          </div>
          <div>£85</div>
        </div>
        <div className="flex justify-around mt-3 mb-2 text-[#2A254B] mr-16">
          <div className="flex gap-4 w-[309px] h-[120px]">
            <Image
            src="/pictures/vase.jpg"
            alt="Vase-image"
            width={109}
            height={134}
            className="w-[109px]"/>
            <div className="">
              <h3 className="mt-2 text-lg">Basic white vase</h3>
              <p className="text-xs mt-2 mb-2">Beautiful and simple this is <br /> one for the classics</p>
              <ul>£125</ul>
            </div>
          </div>
          <div>
            1
          </div>
          <div>£125</div>
        </div>
      <hr className="mb-4 border-[#EBE8F4] mt-4 ml-10 mr-52 lg:ml-56"/>
      <div className="mr-10 lg:mr-48 text-[#2A254B]">
        <h6 className="flex justify-end">Subtotal  £210</h6>
        <p className="flex justify-end mt-2">Taxes and shipping are calculated at checkout</p>
      </div>
      <div className="flex justify-end mr-10 lg:mr-48 mt-4 mb-10">
      <button className="w-[172px] h-[56px] bg-[#2A254B] text-white">
        Go to checkout
      </button>
      </div>
      </div>
    </main>
  )
}

export default Cart