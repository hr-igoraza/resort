import React from 'react'
import room1 from '../assets/Images/room1.png'
import room2 from '../assets/Images/room2.png'
import room3 from '../assets/Images/room3.png'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const StayAndCuisine = () => {
  return (
    <div className='py-[100px] max-sm:py-0 lg:px-[100px]'>
        {/* stay */}
        <div className='flex flex-col max-sm:flex-col-reverse lg:flex-row items-center justify-center gap-10'>
        {/* images for large screens */}
        <div className='hidden lg:flex flex-row gap-8'>
          <img src={room1} alt="Room 1" className='w-[300px] h-auto shadow-lg' />
          <img src={room2} alt="Room 2" className='w-[300px] h-auto shadow-lg' />
          <img src={room3} alt="Room 3" className='w-[300px] h-auto shadow-lg' />
        </div>

        {/* Swiper carousel for mobile view */}
        <div className='lg:hidden w-full'>
          <Swiper spaceBetween={20} slidesPerView={1.5} loop={true} className='flex flex-row items-center justify-center'>
            <SwiperSlide>
              <img src={room1} alt="Room 1" className='w-[221px] h-[529px] shadow-lg ml-[15px]' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={room2} alt="Room 2" className='w-[221px] h-[529px] shadow-lg' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={room3} alt="Room 3" className='w-[221px] h-[529px] shadow-lg' />
            </SwiperSlide>
          </Swiper>
        </div>

        {/* text and button */}
        <div className='flex flex-col gap-6 items-center justify-center'>
          {/* text */}
          <div className='w-full lg:w-[489px] flex flex-col gap-10 px-[30px]'>
            <p className='text-[40px] md:text-[50px] lg:text-[65px] md:leading-[70px] font-bold tracking-wide'>
              Comfort & Luxury Book Your Perfect Stay
            </p>
            <p className='text-[#4C4850] text-[16px] font-normal tracking-wider'>
            Step into a world where modern elegance meets unmatched comfort. From plush interiors to breathtaking views, every detail of our resort is designed to provide a luxurious retreat. Whether you’re unwinding in our premium suites or lounging by the serene poolside, every moment here feels like a dream come true.

            </p>
          </div>
          {/* button */}
          <button className='w-[200px] h-[60px] bg-[#025D28] lg:-mr-[200px] lg:mx-0'>
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