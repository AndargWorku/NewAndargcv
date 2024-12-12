"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsGithub, BsArrowUpRight } from "react-icons/bs";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

// Define the projects array
const projects = [
  {
    num: "01",
    category: "Full stack website",
    title: " Gebeya Website",
    description:
      "that show is the real amazing moderen and complex e-commerce website that used to exchage goods in online platform across world",
    stack: [
      { name: "Tailwind ss" },

      { name: "react" },
      { name: "node js" },
      { name: "mongoDB" },

      { name: "Redux Toolkit" },
      { name: "stripe" },
    ],
    image: "/assets/work/gebeya.png",
    live: "https://gebeya-p9r3.vercel.app/",
    github: "https://github.com/AndargWorku/Gebeya",
  },
  // {
  //   num: "02",
  //   category: "Full stack website",
  //   title: " Lyu Gebeya Website",
  //   description:
  //     "that show is the real amazing moderen and complex e-commerce website that used to for markting of spically for gift things in online platform across world",
  //   stack: [
  //     { name: "Tailwind ss" },

  //     { name: "react" },
  //     { name: "node js" },
  //     { name: "mongoDB" },

  //     ,
  //     { name: "Redux Toolkit" },
  //     { name: "stripe" },
  //   ],
  //   image: "/assets/work/lyu.png",
  //   live: "",
  //   github: "https://github.com/AndargWorku/Lyu-gebeya",
  // },
  // {
  //   num: "03",
  //   category: "Full stack website",
  //   title: " A-Chat  Website",
  //   description:
  //     "that show is the real amazing moderen and complex website that used to exhcange message by text or image or video ",
  //   stack: [
  //     { name: "Tailwind ss" },

  //     { name: "react" },
  //     { name: "node js" },
  //     { name: "mongoDB" },

  //     { name: "Redux Toolkit" },
  //     { name: "sockt.io" },
  //   ],
  //   image: "/assets/work/chat.png",
  //   live: "",
  //   github: "https://github.com/AndargWorku/A-chat",
  // },
  {
    num: "02",
    category: "Frontend website",
    title: " Furniture Website",
    description: "that shows the sample of furniture products",
    stack: [{ name: "reactstrap" }, { name: "Javascript" }, { name: "react" }],
    image: "/assets/work/furiture.png",
    live: "https://furncomm.vercel.app/home",
    github: "https://github.com/AndargWorku/furncomm",
  },
  {
    num: "03",
    category: "Frontend website",
    title: " Car Rental Dashboard Website",
    description: "that show the sample dashboard of car rental website",
    stack: [
      { name: "reactstrap" },

      { name: "Javascript" },

      { name: "react" },

      { name: "Bootstrap" },
    ],
    image: "/assets/work/car-dashboard.png",
    live: "https://rent-dashboard.vercel.app/dashboard",
    github: "https://github.com/AndargWorku/car-rent-dashboard",
  },
  {
    num: "04",
    category: "Frontend website",
    title: " Car Rental Website",
    description:
      "that show the different car used to transporting service for as rent",
    stack: [
      { name: "reactstrap" },

      { name: "Javascript" },

      { name: "react" },

      { name: "Bootstrap" },
    ],
    image: "/assets/work/car-rental.png",
    live: "https://cars-three-psi.vercel.app/home",
    github: "https://github.com/AndargWorku/cars",
  },
  {
    num: "05",
    category: "Frontend website",
    title: " Resturant Website",
    description: "that show  amazing  UI that display different type of foods ",
    stack: [{ name: "Javascript" }, { name: "react" }, { name: "Bootstrap" }],
    image: "/assets/work/restruant.png",
    live: "https://resturant-food.vercel.app/",
    github: "https://github.com/AndargWorku/resturant-food",
  },
  {
    num: "06",
    category: "Frontend website",
    title: " Nike shoes Website",
    description: "that show the different model of nike shoes ",
    stack: [
      { name: "Tailwind css" },

      { name: "Javascript" },

      { name: "react" },
    ],
    image: "/assets/work/nike.png",
    live: "https://nike-six-blush.vercel.app",
    github: "https://github.com/AndargWorku/Nike",
  },
  
  {
    num: "07",
    category: "frontend website",
    title: "Learing managment system",
    description: "",
    stack: [{ name: "Javascript" }, { name: "React" }, { name: "bootstrap" }],
    image: "/assets/work/online.png",
    live: "https://online-rsi3.vercel.app/",
    github: "https://github.com/AndargWorku/online",
  },
  {
    num: "8",
    category: "frontend website",
    title: " Universtiy of Ethiopia",
    description: " List and show the lsite sample Ethiopian Universtiy",
    stack: [
      { name: "reactstrap" },
      { name: "CSS 3" },
      { name: "Javascript" },
      { name: "Html" },
    ],
    image: "/assets/work/universtiy.jpg",
    live: "https://campus-six.vercel.app/",
    github: "https://github.com/AndargWorku/campus",
  },
  {
    num: "9",
    category: "Full stack website",
    title: " E-commerce Website",
    description:
      "that used to buying and selling goods or used to exchange items",
    stack: [
      { name: "react" },
      { name: "node js" },

      { name: "mongoDB" },
      { name: "Bootstrap" },
    ],
    image: "/assets/work/e-commerce.jpg",
    live: "https://wa-livid.vercel.app/Home",
    github: "https://github.com/AndargWorku/wa",
  },

  {
    num: "10",
    category: "Frontend website",
    title: " E-commerce dashboard Website",
    description: "that show the different amzing  modern UI",
    stack: [{ name: "Chakra ui" }, { name: "Typescript" }, { name: "react" }],
    image: "/assets/work/chakra-dash.png",
    live: "https://dshboard-by-chakra.vercel.app",
    github: "https://github.com/AndargWorku/dshboard-by-chakra",
  },
  {
    num: "11",
    category: "Frontend website",
    title: " Signup  Website",
    description: "that show the signup and login page in local storage",
    stack: [
      { name: "Redux toolkit" },

      { name: "Chakra ui" },

      { name: "Javascript" },

      { name: "react" },
    ],
    image: "/assets/work/lo.png",
    live: "https://login-chakra-sigma.vercel.app",
    github: "https://github.com/AndargWorku/login-chakra",
  },

  {
    num: "12",
    category: "Full stack website",
    title: " Book store  Website",
    description: "that used to book store that perfrom CRUD funcation ",
    stack: [
      { name: "Tailwind ss" },

      { name: "react" },
      { name: "node js" },
      { name: "mongoDB" },

      { name: "Redux Toolkit" },
    ],
    image: "/assets/work/book-store.png",
    live: "",
    github: "https://github.com/AndargWorku/Book-store",
  },
  {
    num: "13",
    category: "Full stack website",
    title: " Book Rent  Website",
    description: "that used to book rent in online paltform  ",
    stack: [
      { name: "Tailwind ss" },

      { name: "react" },
      { name: "node js" },
      { name: "postgrass" },

      { name: "Redux Toolkit" },
    ],
    image: "/assets/work/book-rent.png",
    live: "https://book-rent-x75w.vercel.app/",
    github: "https://github.com/AndargWorku/book-rent",
  },
  // Add more projects as needed
];

const Work = () => {
  const [project, setProject] = useState(projects[0]); // Use projects[0] for initialization

  // Move handleSlideChange inside the component
  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]); // Update the current project based on active slide
  };

  return (
    // <motion.section
    //   initial={{ opacity: 0 }}
    //   animate={{
    //     opacity: 1,
    //     transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
    //   }}
    //   className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    // >
    //   <div className="container mx-auto">
    //     <div className="flex flex-col gap-4 xl:flex-row xl:gap-[40px]">
    //       {/* Left Section */}
    //       <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
    //         <div className="flex flex-col gap-[30px] h-[50%]">
    //           <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
    //             {project.num}
    //           </div>
    //           <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
    //             {project.category} project
    //           </h2>

    //           <h2 className="text-[22px] font-semibold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
    //             {project.title} project
    //           </h2>
    //           <p className="text-white/60">{project.description}</p>
    //           <ul className="flex gap-4">
    //             {project.stack.map((item, index) => (
    //               <li key={index} className="text-xl text-accent">
    //                 {item.name}
    //                 {index !== project.stack.length - 1 && ","}
    //               </li>
    //             ))}
    //           </ul>
    //           <div className="border border-white/20"></div>
    //           <div className="flex items-center gap-4">
    //             {/* Live Project */}
    //             <Link href={project.live}>
    //               <TooltipProvider delayDuration={100}>
    //                 <Tooltip>
    //                   <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
    //                     <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
    //                   </TooltipTrigger>
    //                   <TooltipContent>
    //                     <p>Live Projects</p>
    //                   </TooltipContent>
    //                 </Tooltip>
    //               </TooltipProvider>
    //             </Link>
    //             {/* GitHub */}
    //             <Link href={project.github}>
    //               <TooltipProvider delayDuration={100}>
    //                 <Tooltip>
    //                   <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
    //                     <BsGithub className="text-white text-3xl group-hover:text-accent" />
    //                   </TooltipTrigger>
    //                   <TooltipContent>
    //                     <p>GitHub Repository</p>
    //                   </TooltipContent>
    //                 </Tooltip>
    //               </TooltipProvider>
    //             </Link>
    //           </div>
    //         </div>
    //       </div>

    //       {/* Right Section */}
    //       <div className="w-full xl:w-[50%] ">
    //         <Swiper
    //           spaceBetween={30}
    //           slidesPerView={1}
    //           className="xl:h-[520px] mb-12"
    //           onSlideChange={handleSlideChange} // Use the handler here
    //         >
    //           {projects.map((project, index) => (
    //             <SwiperSlide key={index} className="w-full">
    //               <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
    //                 {/* Overlay */}
    //                 <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
    //                 {/* Image */}
    //                 <div className="relative w-full h-full  ">
    //                   <Image
    //                     src={project.image}
    //                     fill
    //                     className="object-cover "
    //                     alt=""
    //                   />
    //                 </div>
    //               </div>
    //             </SwiperSlide>
    //           ))}
    //           <WorkSliderBtns
    //             containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
    //             btnStyles="bg-accent hover-bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
    //           />
    //         </Swiper>
    //       </div>
    //     </div>
    //   </div>
    // </motion.section>
    <motion.section
  initial={{ opacity: 0 }}
  animate={{
    opacity: 1,
    transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
  }}
  className="min-h-[80vh] flex flex-col justify-center py-8 sm:py-10 lg:py-12 xl:px-0"
>
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col gap-6 lg:gap-8 xl:flex-row xl:gap-[40px]">
      {/* Left Section */}
      <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
        <div className="flex flex-col gap-6 sm:gap-8 h-auto">
          <div className="text-6xl sm:text-7xl lg:text-8xl leading-none font-extrabold text-transparent text-outline">
            {project.num}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
            {project.category} project
          </h2>
          <h3 className="text-lg sm:text-xl lg:text-[22px] font-semibold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
            {project.title} project
          </h3>
          <p className="text-sm sm:text-base text-white/60">{project.description}</p>
          <ul className="flex flex-wrap gap-2 sm:gap-4">
            {project.stack.map((item, index) => (
              <li key={index} className="text-base sm:text-lg text-accent">
                {item.name}
                {index !== project.stack.length - 1 && ","}
              </li>
            ))}
          </ul>
          <div className="border border-white/20"></div>
          <div className="flex items-center gap-4">
            {/* Live Project */}
            <Link href={project.live}>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger className="w-12 h-12 sm:w-[70px] sm:h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                    <BsArrowUpRight className="text-white text-2xl sm:text-3xl group-hover:text-accent" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Live Projects</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Link>
            {/* GitHub */}
            <Link href={project.github}>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger className="w-12 h-12 sm:w-[70px] sm:h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                    <BsGithub className="text-white text-2xl sm:text-3xl group-hover:text-accent" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>GitHub Repository</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Link>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full xl:w-[50%]">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          className="h-[300px] sm:h-[400px] xl:h-[520px] mb-8 lg:mb-12"
          onSlideChange={handleSlideChange}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index} className="w-full">
              <div className="h-[300px] sm:h-[400px] xl:h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                {/* Overlay */}
                <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                {/* Image */}
                <div className="relative w-full h-full">
                  <Image
                    src={project.image}
                    fill
                    className="object-cover"
                    alt=""
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
          <WorkSliderBtns
            containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
            btnStyles="bg-accent hover-bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
          />
        </Swiper>
      </div>
    </div>
  </div>
</motion.section>

  );
};

export default Work;

