import React from 'react'
import { IoMdMail } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaBehance } from "react-icons/fa";

const Playground = () => {
  return (
    <div>

    <div className='pt-10 px-4 md:px-10 lg:px-20 mx-4'>
    

    <div className=' text-center'>
        <p className='font-MonumentExtended md:text-[20px] text-[14px]'>Welcome to my <span className='text-[#3B82F6] '>Playground</span></p>
      </div>

      <div className='flex justify-center mt-[5px]'>
        <p className='font-SomerunDemo md:text-[14px] text-[10px]'>
        ux design, UI design, Motion design, Frontend Development, 
        </p>
      </div>
      </div>






         {/* PROJECT GRID 1*/}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mx-[60px] justify-center  mt-8">
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
            <p className="font-MonumentExtended text-sm sm:text-base md:text-lg">Velura </p>
            <p className="font-SomerunDemo text-xs sm:text-sm text-[#8A8888]">UI Design & Frontend Development</p>
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
            <p className="font-MonumentExtended text-sm sm:text-base md:text-lg">HandyNow Home service App</p>
            <p className="font-SomerunDemo text-xs sm:text-sm text-[#8A8888]">UI/UX Design</p>
          </div>
        </div>
      </div>
 {/* PROJECT GRID 1*/}






 {/* PROJECT GRID 2*/}
 <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mx-[60px] justify-center  mt-8">
        {/* Project 1 */}
        <div className="flex flex-col items-start w-full">
          <div className="w-full h-auto sm:h-[320px] md:h-[380px] overflow-hidden">
            <img
              src="../Images/rawbo.png"
              alt="Velura"
              className="w-full h-full object-cover rounded"
            />
          </div>
          <div className="mt-2 text-left w-full">
            <p className="font-MonumentExtended text-sm sm:text-base md:text-lg">Velura Clothing Brand</p>
            <p className="font-SomerunDemo text-xs sm:text-sm text-[#8A8888]">UI Design</p>
          </div>
        </div>

        {/* Project 2 */}
        <div className="flex flex-col items-start w-full">
          <div className="w-full h-auto sm:h-[320px] md:h-[380px] overflow-hidden">
            <img
              src="../Images/load.png"
              alt="Velura"
              className="w-full h-full object-cover rounded"
            />
          </div>
          <div className="mt-2 text-left w-full">
            <p className="font-MonumentExtended text-sm sm:text-base md:text-lg">Velura Clothing Brand</p>
            <p className="font-SomerunDemo text-xs sm:text-sm text-[#8A8888]">UI Design</p>
          </div>
        </div>
      </div>
      
 {/* PROJECT GRID 2*/}













 {/* PROJECT GRID 3*/}
 <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mx-[60px] justify-center  mt-8">
        {/* Project 1 */}
        <div className="flex flex-col items-start w-full">
          <div className="w-full h-auto sm:h-[320px] md:h-[380px] overflow-hidden">
            <img
              src="../Images/load.png"
              alt="Velura"
              className="w-full h-full object-cover rounded"
            />
          </div>
          <div className="mt-2 text-left w-full">
            <p className="font-MonumentExtended text-sm sm:text-base md:text-lg">Velura Clothing Brand</p>
            <p className="font-SomerunDemo text-xs sm:text-sm text-[#8A8888]">UI Design</p>
          </div>
        </div>

        {/* Project 2 */}
        <div className="flex flex-col items-start w-full">
          <div className="w-full h-auto sm:h-[320px] md:h-[380px]  overflow-hidden">
            <img
              src="../Images/load.png"
              alt="Velura"
              className="w-full h-full object-cover rounded"
            />
          </div>
          <div className="mt-2 text-left w-full">
            <p className="font-MonumentExtended text-sm sm:text-base md:text-lg">Velura Clothing Brand</p>
            <p className="font-SomerunDemo text-xs sm:text-sm text-[#8A8888]">UI Design</p>
          </div>
        </div>
      </div>
      
 {/* PROJECT GRID 3*/}



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
  )
}

export default Playground