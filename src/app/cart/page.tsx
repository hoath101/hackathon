import { Metadata } from "next"
import Header from "@/components/header";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Shopping Cart | Avion",
  description: "Review and checkout your Avion shopping cart.",
}

const Cart = () => {
  return (
    <main>
      <Header />

      <div className="bg-[#F9F9F9] min-h-screen pb-10">
        <h1 className="pt-12 px-6 lg:px-64 text-2xl text-[#2A254B] font-light">
          Your Shopping Cart
        </h1>

        {/* Desktop Table Header */}
        <div className="hidden md:grid grid-cols-3 px-6 lg:px-64 mt-10 text-[#2A254B] font-medium">
          <span>Product</span>
          <span className="text-center">Quantity</span>
          <span className="text-right">Total</span>
        </div>

        <hr className="border-[#EBE8F4] mt-3 mx-6 lg:mx-64" />

        {/* PRODUCT 1 */}
        <div className="px-6 lg:px-64 mt-6">
          {/* Mobile Card */}
          <div className="md:hidden bg-white p-4 rounded-lg shadow-sm border">
            <div className="flex gap-4">
              <Image
                src="/pictures/vase-1.jpg"
                alt="Vase"
                width={90}
                height={110}
                className="rounded-md"
              />

              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-medium text-[#2A254B]">
                    Graystone Vase
                  </h3>
                  <p className="text-sm mt-1 text-gray-600">£85</p>
                </div>
              </div>
            </div>

            {/* Quantity + Total Row */}
            <div className="mt-4 flex justify-between text-[#2A254B] text-sm">
              <p>Quantity: 1</p>
              <p className="font-semibold">Total: £85</p>
            </div>
          </div>

          {/* Desktop Row */}
          <div className="hidden md:grid grid-cols-3 items-center text-[#2A254B]">
            <div className="flex gap-4">
              <Image
                src="/pictures/vase-1.jpg"
                alt="Vase-image"
                width={109}
                height={134}
              />
              <div>
                <h3 className="text-lg">Graystone Vase</h3>
                <p className="text-xs mt-2 mb-3">
                  A timeless ceramic vase with a tri-color grey glaze.
                </p>
                <p>£85</p>
              </div>
            </div>

            <p className="text-center">1</p>
            <p className="text-right">£85</p>
          </div>
        </div>

        {/* PRODUCT 2 */}
        <div className="px-6 lg:px-64 mt-6">
          {/* Mobile Card */}
          <div className="md:hidden bg-white p-4 rounded-lg shadow-sm border">
            <div className="flex gap-4">
              <Image
                src="/pictures/vase.jpg"
                alt="Vase"
                width={90}
                height={110}
                className="rounded-md"
              />

              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-medium text-[#2A254B]">
                    Basic White Vase
                  </h3>
                  <p className="text-sm mt-1 text-gray-600">£125</p>
                </div>
              </div>
            </div>

            {/* Quantity + Total Row */}
            <div className="mt-4 flex justify-between text-[#2A254B] text-sm">
              <p>Quantity: 1</p>
              <p className="font-semibold">Total: £125</p>
            </div>
          </div>

          {/* Desktop Row */}
          <div className="hidden md:grid grid-cols-3 items-center text-[#2A254B] mt-4">
            <div className="flex gap-4">
              <Image
                src="/pictures/vase.jpg"
                alt="Vase-image"
                width={109}
                height={134}
              />
              <div>
                <h3 className="text-lg">Basic White Vase</h3>
                <p className="text-xs mt-2 mb-2">
                  Beautiful and simple — one for the classics.
                </p>
                <p>£125</p>
              </div>
            </div>

            <p className="text-center">1</p>
            <p className="text-right">£125</p>
          </div>
        </div>

        <hr className="border-[#EBE8F4] mt-6 mx-6 lg:mx-64" />

        {/* Subtotal */}
        <div className="px-6 lg:px-64 text-[#2A254B] text-right mt-4">
          <h6 className="text-lg font-semibold">Subtotal £210</h6>
          <p className="mt-2 text-sm">
            Taxes and shipping are calculated at checkout
          </p>
        </div>

        {/* Checkout Button */}
        <div className="flex justify-end px-6 lg:px-64 mt-6">
          <button className="w-full md:w-[200px] h-[56px] bg-[#2A254B] text-white rounded-md">
            Go to checkout
          </button>
        </div>
      </div>
    </main>
  );
};

export default Cart;
