import React from 'react'

import { IoMdMail } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaBehance } from "react-icons/fa";

const About = () => {
  return (
    <div className='px-4 sm:px-6 md:px-8 lg:px-12'>

      <div className='pt-10 flex flex-col lg:flex-row gap-6 lg:gap-12'>

        <div className='w-full sm:w-[455px] h-[513px] mx-auto lg:mx-0'>
          <img src="../Images/me.png" alt="Segun" className='w-full h-full object-cover' />
        </div>

        <div className='text-left lg:text-left'>
          <p className='font-MonumentExtended text-2xl'>Hi, I'm Segun</p>

          <p className='mt-6 font-SomerunDemo '>
            If you've made it this far, I already consider us creative buddies. <br />
            I’m a passionate Product Designer and web developer who loves crafting <br />
            beautiful and functional digital experiences that make life simpler and <br />
            more enjoyable. I've had the pleasure of collaborating with amazing teams <br />
            like VELURA, HandyNow, and KORSMART SOLAR, where I sharpened my skills <br />
            and worked on meaningful projects.
          </p>

          <p className=' mt-8 font-SomerunDemo'>
            Creating art is another true love, whether it’s traditional or digital. <br />
            You can sometimes find me sketching in Procreate. I’m always <br />
            excited to share my creativity and enthusiasm with new teams <br />
            and I’m currently seeking a full-time position and internship opportunities. <br />
            If you ever want to chat or have a position or a project that could benefit <br />
            from my creativity & style, reach out to me!
          </p>

          <div className='flex justify-center lg:justify-start gap-4 items-center mt-12'>
            <p className='font-MonumentExtended'>Stalk Me</p>

            <div className='flex text-[#3B82F6] text-[16px] gap-4'>
              <p><IoMdMail /></p>
              <p><FaLinkedinIn /></p>
              <p><FaXTwitter /></p>
              <a href="https://www.behance.net/oluwasegunpeter" target='_blank' rel="noopener noreferrer">
                <p><FaBehance /></p>
              </a>
            </div>
          </div>
        </div>

      </div>

      <div className="mt-10">
        <hr className="border-t border-gray-300 w-full max-w-[1190px] mx-auto" />
      </div>

      <div className='mt-10 text-center'>
        <p className='font-SomerunDemo md:text-[12px] text-[8px]'>Big ideas deserve Bold Execution</p>
      </div>

      <div className='flex justify-center mt-5'>
        <p className='font-MonumentExtended md:text-[14px] text-[10px]'>
          Let’s team up and build something <span className='text-[#3B82F6]'>Unforgettable..</span>
        </p>
      </div>

      <div className='flex text-[#3B82F6] text-[16px] gap-4 justify-center mt-10'>
        <p><IoMdMail /></p>
        <p><FaLinkedinIn /></p>
        <p><FaXTwitter /></p>
      </div>

      <div className='flex gap-4 mt-4 font-SomerunDemo md:text-[12px] text-[6px] justify-center'>
        <p>@segun 2025</p>
        <p>All Rights Reserved</p>
      </div>

    </div>
  );
}

export default About;
