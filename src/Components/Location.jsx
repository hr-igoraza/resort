import React from 'react'

const Location = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-[100px] py-[50px]'>
      <p className='text-[65px] leading-[70px] font-bold'>Our Location</p>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15748.394155784825!2d76.6125584!3d9.3245364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0622eb1a82ef97%3A0xf573ccb29d01a039!2sChengannur%2C%20Kerala!5e0!3m2!1sen!2sin!4v1737921790458!5m2!1sen!2sin"
        width="1240"
        height="700"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  )
}

export default Location