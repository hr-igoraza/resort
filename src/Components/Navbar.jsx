import React, { useState } from 'react';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi'; // Importing menu and close icons

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="absolute w-full h-auto bg-gradient-to-b from-black to-transparent px-4 md:px-10 py-4 md:py-6 flex justify-between lg:justify-start lg:gap-48 items-center">
      <p className="text-white text-[20px] md:text-2xl font-extrabold">MARMELOS</p>

      {/* Menu Icon for Small Screens */}
      <div className="md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <HiOutlineX className="text-white w-8 h-8" /> // Close icon
          ) : (
            <HiOutlineMenu className="text-white w-8 h-8" /> // Hamburger icon
          )}
        </button>
      </div>

      {/* Navigation Links for Larger Screens */}
      <nav className="hidden md:flex gap-14 text-white">
        <a href="#" className="text-[24px] font-medium hover:text-gray-300">Home</a>
        <a href="#" className="text-[24px] font-medium hover:text-gray-300">Booking</a>
        <a href="#" className="text-[24px] font-medium hover:text-gray-300">Food</a>
        <a href="#" className="text-[24px] font-medium hover:text-gray-300">Blog</a>
        <a href="#" className="text-[24px] font-medium hover:text-gray-300">Tourist Destination</a>
        <a href="#" className="text-[24px] font-medium hover:text-gray-300">Contact</a>
      </nav>

      {/* Mobile Menu (Dropdown) */}
      {isMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-black bg-opacity-90 text-white flex flex-col items-center gap-6 py-6 md:hidden">
          <a href="#" className="text-lg font-medium hover:text-gray-300">Home</a>
          <a href="#" className="text-lg font-medium hover:text-gray-300">Booking</a>
          <a href="#" className="text-lg font-medium hover:text-gray-300">Food</a>
          <a href="#" className="text-lg font-medium hover:text-gray-300">Blog</a>
          <a href="#" className="text-lg font-medium hover:text-gray-300">Tourist Destination</a>
          <a href="#" className="text-lg font-medium hover:text-gray-300">Contact</a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
