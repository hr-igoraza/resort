import React from 'react'
import room1 from '../assets/Images/room1.png'
import room2 from '../assets/Images/room2.png'
import room3 from '../assets/Images/room3.png'

const StayAndCuisine = () => {
  return (
    <div className='py-[100px] lg:px-[100px]'>
        {/* stay */}
        <div className='flex flex-row items-center justify-center gap-10'>
            {/* images */}
            <div className='flex flex-row gap-8'>
                <img src={room1} alt="" />
                <img src={room2} alt="" />
                <img src={room3} alt="" />
            </div>
            {/* text and see more button */}
            <div className='flex flex-col gap-6'>
                {/* text */}
                <div className='w-[489px] flex flex-col gap-10'>
                    <p className='text-[60px] leading-[70px] font-bold tracking-wide'>Comfort & Luxury Book Your Perfect Stay</p>
                    <p className='text-[#4C4850] text-[16px] font-normal tracking-wide'>Step into a world where modern elegance meets unmatched comfort. From plush interiors to breathtaking views, every detail of our resort is designed to provide a luxurious retreat. Whether you’re unwinding in our premium suites or lounging by the serene poolside, every moment here feels like a dream come true.</p>
                </div>
                {/* button */}
                <button className='w-[200px] h-[60px] bg-[#025D28] bottom-0'>
                    <p className='text-[20px] font-normal leading-[40px] text-white'>See more</p>
                </button>
            </div>
        </div>

        {/* cuisine */}
        <div>
            {/* text and button */}
            <div>
                {/* text */}
                <div>

                </div>
                {/* button */}
                <button>

                </button>
            </div>

            {/* image */}
            <img src="" alt="" />
        </div>
    </div>
  )
}

export default StayAndCuisine