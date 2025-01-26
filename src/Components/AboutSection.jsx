import kathakali from '../assets/Images/kathakali.png'
import kathakali2 from '../assets/Images/kathakali2.png'
import thrissur from '../assets/Images/thrissur.png'
import nature from '../assets/Images/nature.png'

const AboutSection = () => {
  return (
    <div className='h-screen mt-[750px] flex flex-row items-start justify-evenly py-[100px] px-[100px]'>
        {/* main content */}
        <div className="h-[437px] w-[424px] flex flex-col gap-16">
            <p className="text-[65px] font-bold leading-16 text-[#025D28]">Welcome to Marmelos</p>
            <p className="text-[#4C4850] text-[16px] font-normal w-[373px]">Nestled amidst the lush greenery of serene landscapes, Paradise Resort offers you a perfect escape from the hustle and bustle of daily life. Explore the beauty of nature, indulge in luxurious amenities, and experience unmatched hospitality.From tranquil hill views to traditional cultural performances, immerse yourself in an unforgettable journey. Witness our iconic Kathakali dance, enjoy the breathtaking greenery of tea plantations, and marvel at the intricate architecture of historic temples. Your stay with us promises relaxation, rejuvenation, and a deep connection with the local culture.</p>
        </div>

        {/* images */}
        <div className='h-[572pz] w-[753px] flex flex-col gap-5 items-center justify-center '>
            {/* 1st row */}
            <div className='mt-[10px] flex flex-row gap-5 items-end justify-center'>
                <img src={nature} alt="" className='h-[166px] w-[168px]' />
                <img src={kathakali} alt=""  className='h-[222px] w-[450px]'/>
            </div>

            {/* 2nd row */}
            <div className='-ml-[150px] flex flex-row gap-5 items-start justify-center'>
                <img src={kathakali2} alt="" className='h-[222px] w-[450px]' />
                <img src={thrissur} alt="" className='h-[333px] w-[225px]' />
            </div>
        </div>

    </div>
  )
}

export default AboutSection