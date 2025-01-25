import React from 'react'

const Navbar = () => {
  return (
    <div className='absolute w-full h-[130px] bg-linear-to-b from-black to-transparent flex flex-row px-10 py-6 items-start gap-48'>
      <p className='text-white text-[20px] font-extrabold'>MARMELOS</p>
      <nav className='flex flex-row gap-14 items-center justify-center'>
        <a href="" className='text-[24px] font-medium text-white'>Home</a>
        <a href="" className='text-[24px] font-medium text-white'>Booking</a>
        <a href="" className='text-[24px] font-medium text-white'>Food</a>
        <a href="" className='text-[24px] font-medium text-white'>blog</a>
        <a href="" className='text-[24px] font-medium text-white'>Tourist Destination</a>
        <a href="" className='text-[24px] font-medium text-white'>Contact</a>
      </nav>
    </div>
  )
}

export default Navbar