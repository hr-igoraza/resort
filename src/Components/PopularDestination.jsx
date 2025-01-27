import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import location from '../assets/Images/Location.png'
import varkala from '../assets/Images/Varkala.png'
import jadayu from '../assets/Images/Jadayu.png'
import munnar from '../assets/Images/Munnar.png'

const destinations = [
  {
    img: varkala,
    name: 'Varkala Beach',
    distance: '30 KM',
    location: 'Varkala, Trivandrum',
    description: 'Varkala Beach is a stunning coastal spot in Kerala, famous for its cliffs, golden sands, and serene sunsets.',
  },
  {
    img: jadayu,
    name: 'Jadayu Rock',
    distance: '40 KM',
    location: 'Kollam, Kerala',
    description: 'Jatayu Para is a scenic hilltop in Kerala, known for its mythical connection to the Ramayana.',
  },
  {
    img: munnar,
    name: 'Munnar',
    distance: '20 KM',
    location: 'Munnar, Idukki',
    description: 'Munnar is a picturesque hill station in Kerala, renowned for its tea gardens and cool climate.',
  }
];

const PopularDestination = () => {
  return (
    <div className='py-[100px] px-5 lg:px-[100px] lg:pb-[500px] pb-[200px] flex flex-col gap-[50px] md:gap-[100px]'>
      <div className='flex flex-col text-center gap-5'>
        <p className='text-[40px] md:text-[65px] leading-[40px] font-bold'>Popular Destination</p>
        <p className='text-[12px] md:text-[24px] leading-[36px] font-normal text-[#6C757D]'>
          Vacations to make your experience enjoyable in Kerala!
        </p>
      </div>

      {/* Desktop View */}
      <div className='hidden md:flex flex-row justify-center gap-10'>
        {destinations.map((item, index) => (
          <div key={index} className='h-[420px] w-[394px] drop-shadow-2xl shadow-xl rounded-3xl p-[30px] flex flex-col gap-2 bg-white'>
            <img src={item.img} alt={item.name} className='h-[219px] w-[346px]' />
            <div className='flex flex-col items-start gap-3'>
              <div className='flex flex-row justify-between w-full px-[5px]'>
                <p className='text-[20px] leading-[30px] font-normal text-[#025D28]'>{item.name}</p>
                <p className='text-[20px] leading-[30px] font-semibold text-[#4C4850]'>{item.distance}</p>
              </div>

              <div className='flex flex-row gap-2 items-center'>
                <img src={location} alt="" className='w-[8.5px] h-[10px]' />
                <p className='text-[10px] leading-[10px] font-normal'>{item.location}</p>
              </div>
            </div>
            <p className='w-full tracking-wide text-[16px] md:text-[20px] leading-[30px] font-normal'>{item.description}</p>
          </div>
        ))}
      </div>

      {/* Mobile View Carousel */}
      <div className='md:hidden'>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          pagination={{ clickable: true }}
          modules={[Pagination]}
        >
          {destinations.map((item, index) => (
            <SwiperSlide key={index}>
              <div className='h-[420px] drop-shadow-2xl shadow-xl rounded-3xl p-[20px] flex flex-col gap-2 bg-white'>
                <img src={item.img} alt={item.name} className='h-[219px] w-full object-cover rounded-lg' />
                <div className='flex flex-col items-start gap-3'>
                  <div className='flex flex-row justify-between w-full px-[5px]'>
                    <p className='text-[20px] leading-[30px] font-normal text-[#025D28]'>{item.name}</p>
                    <p className='text-[20px] leading-[30px] font-semibold text-[#4C4850]'>{item.distance}</p>
                  </div>

                  <div className='flex flex-row gap-2 items-center'>
                    <img src={location} alt="" className='w-[8.5px] h-[10px]' />
                    <p className='text-[10px] leading-[10px] font-normal'>{item.location}</p>
                  </div>
                </div>
                <p className='w-full tracking-wide text-[16px] leading-[24px] font-normal'>{item.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

        <button className='w-[200px] h-[60px] bg-[#025D28] lg:-mr-[1000px] lg:mx-0 self-center'>
            <p className='text-[20px] font-normal leading-[40px] text-white'>See more</p>
        </button>
    </div>
  )
}

export default PopularDestination;
