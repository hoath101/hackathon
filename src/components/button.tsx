import React from 'react'

const Button = () => {
  return (
    <div>
        <button className='w-[170px] h-[56px] text-[#F9F9F9] bg-[#4E4D93] ml-10 mt-8'>
        View Collection
        </button>
    </div>
  )
}
export const Btn = () =>{
    return(
        <div>
        <button className='w-[170px] h-[56px] text-[#2A254B] bg-[#F9F9F9]'>
        View Collection
        </button>
    </div>
    )
}

export const SignUp = () => {
  return (
    <div>
        <button className='w-[118px] h-[56px] bg-[#2A254B] text-[#F9F9F9]'>
    Sign up
        </button>
    </div>
  )
}
export const Product = () =>{
  return(
      <div>
      <button className='w-[170px] h-[56px] text-[#2A254B] bg-[#F9F9F9]'>
      View our products
      </button>
  </div>
  )
}

export default Button