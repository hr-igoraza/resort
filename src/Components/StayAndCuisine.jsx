import React from 'react'
import room1 from '../assets/Images/room1.png'
import room2 from '../assets/Images/room2.png'
import room3 from '../assets/Images/room3.png'
import  flavours from '../assets/Images/flavours.png'

import SeeMoreButton from '../ResusableComps/SeeMoreButton'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const StayAndCuisine = () => {
  return (
    <div className='py-[100px] max-sm:py-0 lg:px-[100px] gap-[100px]'>
        {/* stay */}
        <div className='flex flex-col max-sm:flex-col-reverse lg:flex-row items-center justify-center gap-10 pb-[100px]'>
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
            Step into a world where modern elegance meets unmatched comfort. From plush interiors to breathtaking views, every detail of our resort is designed to provide a luxurious retreat. Whether you’re unwinding in our premium suites or lounging by the serene poolside, every moment here feels like a dream come true.</p>
          </div>
          {/* button */}
          <div className='lg:self-end lg:mr-10'>
            <SeeMoreButton />
          </div>
        </div>
      </div>

        {/* cuisine */}
        <div className='flex flex-col lg:flex-row items-start justify-center gap-10 pb-[100px]'>
            {/* text and button */}
            <div className='flex flex-col gap-10 items-start justify-start px-[30px]'>
                {/* text */}
                <div className='w-full lg:w-[550px] flex flex-col gap-10'>
                    <p className='text-[40px] md:text-[50px] lg:text-[65px] md:leading-[70px] font-bold tracking-wide'>
                    Flavors of Kerala Authentic Cuisine at Our Resort
                    </p>
                    <p className='lg:w-[455px] text-[#4C4850] text-[16px] font-normal tracking-wider'>
                    Delight in the soul of Kerala with our authentic culinary offerings. Our expert chefs bring you an array of traditional dishes, crafted with locally sourced spices and ingredients. From rich curries to freshly steamed delicacies, each bite is a celebration of Kerala’s vibrant flavors. Pair your meal with our signature beverages for a dining experience that’s as unique as the land itself.</p>
                </div>
                {/* button */}
                <SeeMoreButton />
            </div>

            {/* image */}
            <img src={flavours} alt="" />
        </div>
    </div>
  )
}

export default StayAndCuisine