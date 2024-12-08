"use client"

import Photo from '@/components/Photo';
import Socials from '@/components/Socials';
import Stats from '@/components/Stats';
import { Button } from '@/components/ui/button'
import React from 'react'
import { FiDownload } from "react-icons/fi";
import Services from './services/page';
import { TypeAnimation } from 'react-type-animation';
import Resume from './resume/page';
import Link from 'next/link';
import Work from './work/page';
import Contact from './contact/page';
const Home = () => {
  return (
   <section className=' h-full'>
    <div className="container mx-auto h-full">
      <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 gap-8">
        <div className="text-center xl:text-left order-2 xl:order-none">
          <span className=' text-xl'>I'm Software Engineering</span>
          <h1 className="text-white mb-4 text-2xl sm:text-xl lg:text-3xl lg:leading-normal font-extrabold">
            <span className=" bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Andarg",
                1000,
                "Web Developer",
                1000,
                "Mobile Developer (React Native)",
                1000,
                "Full Stack Developer",
                1000,
                1000,
                "Backend Developer"
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
         
          <p> 
          Experienced Full-Stack Developer specializing in the MERN stack, with expertise in building scalable web and mobile applications. Proficient in React Native for creating responsive, user-friendly mobile solutions. Skilled in end-to-end development, delivering efficient code and collaborating effectively on projects. 
          </p>
        
        <div className=' flex flex-col xl:flex-row items-center gap-8'>
          <Button
           variant="outline"
           size="lg"
           className=" uppercase flex items-center gap-2">
             <Link href="/assets/resume.pdf" className="btn" target="_black"><span> Download CV </span></Link>
            {/* <span>Download CV</span> */}
            <FiDownload className="text-xl"/>

          </Button>
          <div className=' mb-8 xl:mb-8'>
            <Socials containerStyles=" flex gap-6"
            iconsStyles=" w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
            />
          </div>

        </div>
        </div>

        <div className=' order-1 xl:order-none mb-8 xl:mb-0'>
          <Photo/>
        </div>

      </div>

    </div>
    <Stats />
    {/* <Services/>
    <Resume/>
    <Work/>
    <Contact/> */}

   </section>
  )
}

export default Home



