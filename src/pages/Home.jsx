import React, { useRef } from 'react';
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaBehance } from "react-icons/fa";


const Home = () => {

  const heroRef = useRef(null);

  const scrollToHero = () => {
    heroRef.current?.scrollIntoView({ behavior: 'smooth' });
  };















  return (


    <div ref={heroRef} className="pt-10 px-4 md:px-10 lg:px-20 ">
      {/* HERO SECTION */}

        <div  className=" mt-[300px]">
        <p className="font-MonumentExtended text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-snug">
          I Design and Develop websites that captivate,
        </p>
        <p className="font-MonumentExtended text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-snug">
          Convert and <span className="text-[#3B82F6]">Elevate your Brand...</span>
        </p>





        
      </div>

      {/* FEATURED WORK SECTION */}

      <div className="flex justify-between items-center mt-10 sm:mt-12 md:mt-16 font-SomerunDemo text-sm sm:text-base">
        <p>Featured Work</p>
        <p>See all Work</p>
      </div>
      
      <div className="flex justify-center mt-3">
        <hr className="border-t border-gray-300 w-full max-w-[1190px]" />
      </div>

      {/* PROJECT GRID 1*/}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mt-6">
        {/* Project 1 */}
        <div className="flex flex-col items-start w-full">
          <div className="w-full h-auto sm:h-[320px] md:h-[380px] overflow-hidden">
            <img
              src="../Images/store.png"
              alt="Velura"
              className="w-full h-full object-cover rounded"
            />
          </div>
          <div className="mt-2 text-left w-full">
            <p className="font-MonumentExtended text-sm sm:text-base md:text-lg">Velura</p>
            <p className="font-SomerunDemo text-xs sm:text-sm text-[#8A8888]"> UI Design & Frontend Development </p>
          </div>
        </div>


        {/* Project 2 */}
        <div className="flex flex-col items-start w-full">
          <div className="w-full h-auto sm:h-[320px] md:h-[380px] overflow-hidden">
            <img
              src="../Images/service.png"
              alt="Velura"
              className="w-full h-full object-cover rounded"
            />
          </div>
          <div className="mt-2 text-left w-full">
            <p className="font-MonumentExtended text-sm sm:text-base md:text-lg">HandyNow</p>
            <p className="font-SomerunDemo text-xs sm:text-sm text-[#8A8888]">UI/UX Design</p>
          </div>
        </div>
      </div>
 {/* PROJECT GRID 1*/}

 


 {/* PROJECT GRID 3*/}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mt-6">
        {/* Project 1 */}
        <div className="flex flex-col items-start w-full">
          <div className="w-full h-auto sm:h-[320px] md:h-[380px] overflow-hidden">
            <img
              src="../Images/solar.png"
              alt="Velura"
              className="w-full h-full object-cover rounded"
            />
          </div>
          <div className="mt-2 text-left w-full">
            <p className="font-MonumentExtended text-sm sm:text-base md:text-lg">Korsmart Solar</p>
            <p className="font-SomerunDemo text-xs sm:text-sm text-[#8A8888]">UI Design</p>
          </div>
        </div>

        {/* Project 2 */}
        <div className="flex flex-col items-start w-full">
          <div className="w-full h-auto sm:h-[320px] md:h-[380px] overflow-hidden">
            <img
              src="../Images/rawbo.png"
              alt="Velura"
              className="w-full h-full object-cover rounded"
            />
          </div>
          <div className="mt-2 text-left w-full">
            <p className="font-MonumentExtended text-sm sm:text-base md:text-lg">RawBot</p>
            <p className="font-SomerunDemo text-xs sm:text-sm text-[#8A8888]">UI Design</p>
          </div>
        </div>
      </div>
      
 {/* PROJECT GRID 2*/}

 <div
        onClick={scrollToHero}
        className='flex items-center gap-2 mt-[20px] cursor-pointer hover:underline'
      >
        <p className='text-[20px] font-SomerunDemo'>Go to top</p>
        <p className='text-[#3B82F6] text-[16px]'><FaRegArrowAltCircleUp /></p>
      </div>



      <div className='flex text-[#3B82F6] text-[16px] gap-[10px] justify-center mt-[40px] '>
      <p><IoMdMail/></p>
      <p><FaLinkedinIn/></p>
      <p><FaXTwitter/></p>
      <a href="https://www.behance.net/oluwasegunpeter" target='blank'><p><FaBehance/></p></a> 
      </div>

     


     <div className='flex gap-4 mt-[20px] font-SomerunDemo text-[12px] justify-center'>
      <p>@segun 2025</p>
      <p>All Right Reserved</p>
     </div>












    </div>
  );
};

export default Home;

