import React, { useState } from 'react';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi'; // Importing menu and close icons
import { Link } from 'react-router-dom';

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
        <Link to="/" className="text-[24px] font-medium hover:text-gray-300">Home</Link>
        <Link to="/booking" className="text-[24px] font-medium hover:text-gray-300">Booking</Link>
        <Link to="/food" className="text-[24px] font-medium hover:text-gray-300">Food</Link>
        <Link to="/blog" className="text-[24px] font-medium hover:text-gray-300">Blog</Link>
        <Link to="/tourist-destination" className="text-[24px] font-medium hover:text-gray-300">Tourist Destination</Link>
        <Link to="/contact" className="text-[24px] font-medium hover:text-gray-300">Contact</Link>
      </nav>

      {/* Mobile Menu (Dropdown) */}
      {isMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-black bg-opacity-90 text-white flex flex-col items-center gap-6 py-6 md:hidden">
          <Link to="/" className="text-lg font-medium hover:text-gray-300">Home</Link>
          <Link to="/booking" className="text-lg font-medium hover:text-gray-300">Booking</Link>
          <Link to="/food" className="text-lg font-medium hover:text-gray-300">Food</Link>
          <Link to="/blog" className="text-lg font-medium hover:text-gray-300">Blog</Link>
          <Link to="/tourist-destination" className="text-lg font-medium hover:text-gray-300">Tourist Destination</Link>
          <Link to="/contact" className="text-lg font-medium hover:text-gray-300">Contact</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
