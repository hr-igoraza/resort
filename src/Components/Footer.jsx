import React from 'react'
import fb from "../assets/Images/fb.png"
import insta from "../assets/Images/insta.png"
import linkedin from "../assets/Images/linkedin.png"
import twitter from "../assets/Images/twitter.png"

const Footer = () => {
  return (
    <div className='w-full h-[608px] bg-[#025D28] p-[120px] text-white flex flex-col gap-[100px]'>
        <div className='flex flex-row gap-[100px]'>
            {/* logo and content */}
        <div className='text-start flex flex-col gap-5'> 
            <p className='text-[50px] leading-[32px] font-bold uppercase'>MARMELOS</p>
            <p className='text-[15px] leading-[25px] font-normal w-[437px]'>Escape to the tranquil haven of MARMELIOS Resort, where nature's beauty meets unparalleled luxury, Create unforgettable memories in the heart of paradise. </p>
        </div>

        {/* footer links */}
        <div className='flex flex-row gap-[50px]'>
            <div className='flex flex-col gap-5'>
                <p className='text-[18px] leading-[20px] font-bold'>COMPANY</p>
                <div className='flex flex-col gap-5'>
                    <a href="" className='text-[15px] leading-[20px] font-medium'>About Us</a>
                    <a href="" className='text-[15px] leading-[20px] font-medium'>About Us</a>
                    <a href="" className='text-[15px] leading-[20px] font-medium'>About Us</a>
                    <a href="" className='text-[15px] leading-[20px] font-medium'>About Us</a>
                </div>
            </div>

            <div className='flex flex-col gap-5'>
                <p className='text-[18px] leading-[20px] font-bold'>HELP CENTER</p>
                <div className='flex flex-col gap-5'>
                    <a href="" className='text-[15px] leading-[20px] font-medium'>Find a Property</a>
                    <a href="" className='text-[15px] leading-[20px] font-medium'>How to Host</a>
                    <a href="" className='text-[15px] leading-[20px] font-medium'>Why Us?</a>
                    <a href="" className='text-[15px] leading-[20px] font-medium'>FAQs</a>
                    <a href="" className='text-[15px] leading-[20px] font-medium'>Rental Guides</a>
                </div>
            </div>

            <div>
                <div className='flex flex-col gap-5'>
                <p className='text-[18px] leading-[20px] font-bold'>CONTACT INFO</p>
                <div className='flex flex-col gap-5'>
                    <p className='text-[15px] leading-[20px] font-medium'>Phone: 1234567890</p>
                    <p className='text-[15px] leading-[20px] font-medium'>Email: company@email.com</p>
                    <p className='text-[15px] leading-[20px] font-medium'>Location: 100 Smart Street, LA, USA</p>
                </div>

                <div className='flex flex-row gap-5'>
                    <a href="">
                        <img src={fb} alt="" />
                    </a>

                    <a href="">
                        <img src={insta} alt="" />
                    </a>

                    <a href="">
                        <img src={linkedin} alt="" />
                    </a>

                    <a href="">
                        <img src={twitter} alt="" />
                    </a>
                </div>
            </div>
            </div>
        </div>
    </div>

        {/* copyright */}
        <p className='text-[16px] font-semibold'>© 2024 @brand | All rights reserved</p>
    </div>
  )
}

export default Footer