import React from 'react';

const Location = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-[50px] px-4 md:px-8 py-16'>
      <p className='text-[40px] md:text-[50px] lg:text-[65px] leading-tight font-bold text-center'>
        Our Location
      </p>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15748.394155784825!2d76.6125584!3d9.3245364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0622eb1a82ef97%3A0xf573ccb29d01a039!2sChengannur%2C%20Kerala!5e0!3m2!1sen!2sin!4v1737921790458!5m2!1sen!2sin"
        className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[700px] max-w-[1240px] rounded-lg shadow-lg"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Location;
