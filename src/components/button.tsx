import Link from 'next/link'


const Button = () => {
  return (
    <div>
        <button className='px-6 py-4 text-[#F9F9F9] bg-[#4E4D93] mt-8'>
        View Collection
        </button>
    </div>
  )
}
export const Btn = () =>{
    return(
        <div>
        <button className='px-6 py-4 text-[#2A254B] bg-[#F9F9F9]'>
        View Collection
        </button>
    </div>
    )
}

export const SignUp = () => {
  return (
    <div>
        <button className='px-6 py-4 whitespace-nowrap bg-[#2A254B] text-[#F9F9F9]'>
    Sign up
        </button>
    </div>
  )
}
export const Product = () =>{
  return(
      <div>
      <button className='px-6 py-4 text-[#2A254B] bg-[#F9F9F9]'>
        <Link href="/products">View our products</Link>
      </button>
  </div>
  )
}
export const AddCart = () =>{
  return(
      <div>
      <button className='px-8 py-4 bg-[#2A254B] text-white'>
        <Link href="/cart">Add to cart</Link>
      </button>
  </div>
  )
}
export const CheckOut = () => {
  return (
    <div>
        <button className='px-6 py-4 bg-[#2A254B] text-[#F9F9F9] mb-5'>
        Go to checkout
        </button>
    </div>
  )
}
export default Button
