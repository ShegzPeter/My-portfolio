import React, { useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full shadow-sm flex items-center justify-between px-4 md:px-10 lg:px-20 py-4 bg-white fixed top-0 z-50">
       {/* Left: Logo / Profile section */}
      <Link to="/" className="flex items-center gap-4">
        <div className="h-[103px] w-[103px] overflow-hidden rounded-full">
          <img src="/Images/profile.png" alt="Profile" className="w-full h-full object-cover" />
        </div>
        <p className="text-lg font-SomerunDemo">Segun</p>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-6 text-gray-700 font-SomerunDemo text-[14px]">
        <Link to="/about" className="hover:text-blue-500">About</Link>
        <Link to="/playground" className="hover:text-blue-500">Playground</Link>
        <Link to="/resume" className="hover:text-blue-500">Resume</Link>
      </div>

      {/* Mobile Icon */}
     {/* Mobile Icon */}
<div className="md:hidden text-2xl text-gray-800 cursor-pointer z-50">
  {isMobileMenuOpen ? (
    <HiX onClick={() => setIsMobileMenuOpen(false)} />
  ) : (
    <HiMenuAlt3 onClick={() => setIsMobileMenuOpen(true)} />
  )}
</div>

{/* Mobile Menu */}
{isMobileMenuOpen && (
  <div className="absolute top-[80px] mt-6 left-0 w-full bg-white shadow-lg rounded-b-xl md:hidden flex flex-col px-6 py-6 gap-5 transition-all duration-300 ease-in-out z-40">
    <Link
      to="/about"
      onClick={() => setIsMobileMenuOpen(false)}
      className="text-gray-800 font-SomerunDemo text-base  hover:text-blue-500 transition-colors"
    >
      About
    </Link>
    <Link
      to="/playground"
      onClick={() => setIsMobileMenuOpen(false)}
      className="text-gray-800 font-SomerunDemo text-base hover:text-blue-500 transition-colors"
    >
      Playground
    </Link>
    <Link
      to="/resume"
      onClick={() => setIsMobileMenuOpen(false)}
      className="text-gray-800 font-SomerunDemo text-base hover:text-blue-500 transition-colors"
    >
      Resume
    </Link>
  </div>
)}

      
    </div>
  );
};

export default Navbar;
