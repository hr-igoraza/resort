import React from 'react'
import fb from "../assets/Images/fb.png"
import insta from "../assets/Images/insta.png"
import linkedin from "../assets/Images/linkedin.png"
import twitter from "../assets/Images/twitter.png"

const Footer = () => {
  return (
    <div className='w-full bg-[#025D28] text-white py-20 px-5 md:px-16 lg:px-[120px] flex flex-col gap-16 md:gap-24'>
      <div className='flex flex-col md:flex-row gap-16 lg:gap-[100px] justify-between'>

        {/* Logo and description */}
        <div className='text-start flex flex-col gap-5 max-w-[500px]'>
          <p className='text-[40px] md:text-[50px] leading-tight font-bold uppercase'>MARMELOS</p>
          <p className='text-[15px] md:text-[15px] leading-[25px] font-normal'>
            "Escape to the tranquil haven of MARMELIOS Resort, where nature's beauty meets unparalleled luxury.
            Create unforgettable memories in the heart of paradise."
          </p>
        </div>

        {/* Footer links section */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
          
          {/* Company links */}
          <div className='flex flex-col gap-5'>
            <p className='text-[18px] font-bold'>COMPANY</p>
            <div className='flex flex-col gap-3'>
              <a href="#" className='text-[15px] font-medium hover:text-gray-300 transition'>About Us</a>
              <a href="#" className='text-[15px] font-medium hover:text-gray-300 transition'>Careers</a>
              <a href="#" className='text-[15px] font-medium hover:text-gray-300 transition'>Press</a>
              <a href="#" className='text-[15px] font-medium hover:text-gray-300 transition'>Blog</a>
            </div>
          </div>

          {/* Help Center links */}
          <div className='flex flex-col gap-5'>
            <p className='text-[18px] font-bold'>HELP CENTER</p>
            <div className='flex flex-col gap-3'>
              <a href="#" className='text-[15px] font-medium hover:text-gray-300 transition'>Find a Property</a>
              <a href="#" className='text-[15px] font-medium hover:text-gray-300 transition'>How to Host</a>
              <a href="#" className='text-[15px] font-medium hover:text-gray-300 transition'>Why Us?</a>
              <a href="#" className='text-[15px] font-medium hover:text-gray-300 transition'>FAQs</a>
              <a href="#" className='text-[15px] font-medium hover:text-gray-300 transition'>Rental Guides</a>
            </div>
          </div>

          {/* Contact Information */}
          <div className='flex flex-col gap-5'>
            <p className='text-[18px] font-bold'>CONTACT INFO</p>
            <div className='flex flex-col gap-3'>
              <p className='text-[15px] font-medium'>Phone: 1234567890</p>
              <p className='text-[15px] font-medium'>Email: company@email.com</p>
              <p className='text-[15px] font-medium'>Location: 100 Smart Street, LA, USA</p>
            </div>

            {/* Social Media Links */}
            <div className='flex flex-row gap-5 mt-2'>
              <a href="#"><img src={fb} alt="Facebook" className='w-6 md:w-8' /></a>
              <a href="#"><img src={insta} alt="Instagram" className='w-6 md:w-8' /></a>
              <a href="#"><img src={linkedin} alt="LinkedIn" className='w-6 md:w-8' /></a>
              <a href="#"><img src={twitter} alt="Twitter" className='w-6 md:w-8' /></a>
            </div>
          </div>
          
        </div>
      </div>

      {/* Copyright */}
      <p className='text-center md:text-start text-[14px] md:text-[16px] font-semibold'>© 2024 @brand | All rights reserved</p>
    </div>
  )
}

export default Footer
