import Photo from '@/components/Photo';
import Socials from '@/components/Socials';
import Stats from '@/components/Stats';
import { Button } from '@/components/ui/button'
import React from 'react'
import { FiDownload } from "react-icons/fi";
import Services from './services/page';
import Resume from './resume/page';
const Home = () => {
  return (
   <section className=' h-full'>
    <div className="container mx-auto h-full">
      <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
        <div className="text-center xl:text-left order-2 xl:order-none">
          <span className=' text-xl'>Software Engineering</span>
          <h1 className='h1 '> Hello Im <br/> <span className=' text-accent'>Andarg Worku </span></h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dolorem est quam labore, dicta aperiam ad laboriosam impedit enim ea eaque magnam recusandae ipsam numquam deserunt quisquam, itaque harum asperiores?</p>
        
        <div className=' flex flex-col xl:flex-row items-center gap-8'>
          <Button
           variant="outline"
           size="lg"
           className=" uppercase flex items-center gap-2">
            <span>Download CV</span>
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
    <Stats/>
    <Services/>
    <Resume/>

   </section>
  )
}

export default Home



// "use client";
// import React from "react";
// import Image from "next/image";
// import { TypeAnimation } from "react-type-animation";
// import { motion } from "framer-motion";
// import Link from "next/link";

// const Home = () => {
//   return (
//     <section className="lg:py-16">
//       <div className="grid grid-cols-1 sm:grid-cols-12">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.5 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5 }}
//           className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
//         >
//           <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
//               Hello, I&apos;m{" "}
//             </span>
//             <br></br>
//             <TypeAnimation
//               sequence={[
//                 "Andarg Worku",
//                 1000,
//                 "Full stack Developer",
//                 1000,
//                 "Mobile Developer(",
//                 1000,
//                 "Frontend Developer",
//                 1000,
//                 1000,
//                 "Backend Developer",
//                 1000,
//               ]}
//               wrapper="span"
//               speed={50}
//               repeat={Infinity}
//             />
//           </h1>
//           <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
//             voluptuous.
//           </p>
//           <div>
//             <Link
//               href="/#contact"
//               className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
//             >
//               Hire Me
//             </Link>
//             <Link
//               href="/"
//               className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
//             >
//               <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
//                 Download CV
//               </span>
//             </Link>
//           </div>
//         </motion.div>
//         <motion.div
//           initial={{ opacity: 0, scale: 0.5 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5 }}
//           className="col-span-4 place-self-center mt-4 lg:mt-0"
//         >
//           <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
//             <Image
//               src="/images/hero-image.png"
//               alt="hero image"
//               className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//               width={300}
//               height={300}
//             />
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Home;