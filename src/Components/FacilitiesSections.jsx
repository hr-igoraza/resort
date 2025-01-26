import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import wifiIcon from '../assets/Images/wifiIcon.png';
import parking from '../assets/Images/parking_Area_Icon.png';
import dumbell from '../assets/Images/DumbellIcon.png';
import elipsis from '../assets/Images/EllipsisIcon.png';
import workspace from '../assets/Images/WorkspaceIcon.png';

import FacilitiesCard from './FacilitiesCard';

const FacilitiesSections = () => {
  // Facility data
  const facilities = [
    { icon: wifiIcon, title: 'High-Speed Wi-Fi' },
    { icon: parking, title: 'Parking Area' },
    { icon: dumbell, title: 'Gym and Fitness' },
    { icon: workspace, title: 'Private Workspace' },
    { icon: elipsis, title: 'Other Services' },
  ];

  // State to track screen width
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileOrTablet(window.innerWidth < 1024); // Apply carousel for screens < 1024px
    };

    handleResize(); // Run on mount
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="lg:mt-[250px] max-sm:-mt-[30px] absolute w-full h-auto bg-[#025D28] flex flex-col justify-center items-center gap-16 px-4 md:px-0 py-20 rounded-t-[40px]">
      <p className="text-4xl md:text-[65px] font-bold text-white tracking-wide text-center">
        We provide top facilities
      </p>

      {isMobileOrTablet ? (
        // Swiper Carousel for Mobile and Tablet
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1.2}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
          }}
          className="w-full max-w-[90%] sm:max-w-[600px]"
        >
          {facilities.map((facility, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <FacilitiesCard icon={facility.icon} title={facility.title} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        // Normal grid layout for larger screens
        <div className="w-full flex flex-wrap justify-center items-center gap-12">
          {facilities.map((facility, index) => (
            <FacilitiesCard key={index} icon={facility.icon} title={facility.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FacilitiesSections;
