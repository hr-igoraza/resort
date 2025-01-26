import React from 'react'
import bg from '../assets/Images/moreAbout.jpg'

const MoreAbout = () => {
  return (
    <div className='w-full h-[700px]'>
        <img src={bg} alt="" className='w-full h-[700px] object-cover' />
        <div className='flex-col flex gap-[100px] max-sm:-mt-[700px] -mt-[500px] md:px-[100px]'>
            <p className='text-white text-[90px] font-bold leading-[110px]'>Escape to Paradise</p>
            <p className='text-white text-[20px] font-medium w-[469px] h-[218px] max-sm:px-4'>Discover the perfect getaway where tranquility meets luxury. Immerse yourself in the serene beauty of nature, unwind by the pristine waters, and experience unparalleled hospitality. Whether you're seeking adventure or relaxation, our resort offers everything you need to create unforgettable memories.</p>
        </div>
    </div>
  )
}

export default MoreAbout