import kathakali from '../assets/Images/kathakali.png';
import kathakali2 from '../assets/Images/kathakali2.png';
import thrissur from '../assets/Images/thrissur.png';
import nature from '../assets/Images/nature.png';

const AboutSection = () => {
  return (
    <div className="h-auto lg:mt-[750px] mt-[500px] md:-[1000px] flex flex-col lg:flex-row items-center lg:items-start justify-evenly lg:py-[150px] py-[100px] l px-6 md:px-[50px] lg:px-[100px] gap-12 lg:gap-10">
      {/* main content */}
      <div className="w-full max-w-[424px] flex flex-col gap-8 md:gap-16 text-center lg:text-left">
        <p className="text-[40px] md:text-[50px] lg:text-[65px] font-bold leading-tight text-[#025D28]">
          Welcome to Marmelos
        </p>
        <p className="text-[#4C4850] text-[14px] md:text-[16px] font-normal max-w-[373px] mx-auto lg:mx-0">
          Nestled amidst the lush greenery of serene landscapes, Paradise Resort offers you a perfect escape from the hustle and bustle of daily life. Explore the beauty of nature, indulge in luxurious amenities, and experience unmatched hospitality. From tranquil hill views to traditional cultural performances, immerse yourself in an unforgettable journey. Witness our iconic Kathakali dance, enjoy the breathtaking greenery of tea plantations, and marvel at the intricate architecture of historic temples. Your stay with us promises relaxation, rejuvenation, and a deep connection with the local culture.
        </p>
      </div>

      {/* images */}
      <div className="w-full max-w-[753px] flex flex-col gap-5 items-center justify-center">
        {/* 1st row */}
        <div className="flex flex-row gap-5 items-end justify-center flex-wrap">
          <img src={nature} alt="Nature" className="h-[120px] w-[120px] max-sm:hidden sm:h-[150px] sm:w-[150px] md:h-[166px] md:w-[168px] lg:h-[166px] lg:w-[168px]" />
          <img src={kathakali} alt="Kathakali" className="h-[180px] w-[300px] sm:h-[200px] sm:w-[350px] md:h-[222px] md:w-[450px]" />
        </div>

        {/* 2nd row */}
        <div className="flex flex-row gap-5 items-start justify-center lg:-ml-[150px] flex-wrap">
          <img src={kathakali2} alt="Kathakali 2" className="h-[180px] w-[300px] sm:h-[200px] sm:w-[350px] md:h-[222px] md:w-[450px]" />
          <img src={thrissur} alt="Thrissur" className="h-[200px] w-[150px] max-sm:hidden sm:h-[250px] sm:w-[180px] md:h-[333px] md:w-[225px]" />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
