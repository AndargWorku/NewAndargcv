"use client";

import Link from "next/link";
// components/Footer.js
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="border border-gray-600 " />
      <footer className="bg-primary justify-around text-white px-4 py-2 flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
        <p className="text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} Andarg Worku. All rights reserved.
        </p>
        <div className="flex flex-wrap justify-center md:justify-end space-x-4 px-8">
  <Link
    href="https://www.linkedin.com/in/andarg-worku-bb957823b/"
    target="_blank"
    rel="noopener noreferrer"
    className="relative flex items-center space-x-2 group hover:text-gray-400"
  >
    <FaLinkedin />
    <span className="absolute bottom-full mb-1 hidden text-xs text-white group-hover:block">
      LinkedIn
    </span>
  </Link>
  <Link
    href="https://github.com/AndargWorku"
    target="_blank"
    rel="noopener noreferrer"
    className="relative flex items-center space-x-2 group hover:text-gray-400"
  >
    <FaGithub />
    <span className="absolute bottom-full mb-1 hidden text-xs text-white group-hover:block">
      GitHub
    </span>
  </Link>
  <Link
    href="mailto:andargworku8240@gmail.com"
    className="relative flex items-center space-x-2 group hover:text-gray-400"
  >
    <FaEnvelope />
    <span className="absolute bottom-full mb-1 hidden text-xs text-white group-hover:block ">
      Email
    </span>
  </Link>
</div>

  

{/* 
        <div className="flex flex-wrap justify-center md:justify-end space-x-4">
          <Link
            href="https://www.linkedin.com/in/andarg-worku-bb957823b/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-gray-400"
          >
            <FaLinkedin />
            <span>LinkedIn</span>
          </Link>
          <Link
            href="https://github.com/AndargWorku"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-gray-400"
          >
            <FaGithub />
            <span>GitHub</span>
          </Link>
          <Link
            href="mailto:andargworku8240@gmail.com"
            className="flex items-center space-x-2 hover:text-gray-400"
          >
            <FaEnvelope />
            <span>Email</span>
          </Link>
        </div> */}
      </footer>
    </>
  );
};

export default Footer;

{/* <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className=" w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className=" text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className=" capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider> */}


// "use client";

// import Link from "next/link";
// // components/Footer.js
// import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <>
//   <div className="border border-gray-600"/>
//   <footer className=" flex flex-1 bg-primary text-white px-6 py-3 justify-end"> {/* Reduced py-3 to py-1 for smaller height */}
//     <p className="text-sm">
//       &copy; {new Date().getFullYear()} Andarg Worku. All rights reserved.
//     </p>

//     <div className="flex flex-1 md:flex-row justify-end space-x-6 mb-0 md:mb-0">
//       <Link
//         href="https://www.linkedin.com/in/andarg-worku-bb957823b/"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="flex items-center space-x-2 hover:text-gray-400"
//       >
//         <FaLinkedin />
//         <span>LinkedIn</span>
//       </Link>
//       <Link
//         href="https://github.com/AndargWorku"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="flex items-center space-x-2 hover:text-gray-400"
//       >
//         <FaGithub />
//         <span>GitHub</span>
//       </Link>
//       <Link
//         href="mailto:andargworku8240@gmail.com"
//         className="flex items-center space-x-2 hover:text-gray-400"
//       >
//         <FaEnvelope />
//         <span>Email</span>
//       </Link>
//     </div>
//   </footer>
// </>

   
//   );
// };

// export default Footer;
