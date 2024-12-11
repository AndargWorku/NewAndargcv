"use client";

import Link from "next/link";
// components/Footer.js
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="border border-gray-600" />
      <footer className="bg-primary justify-around text-white px-4 py-2 flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
        <p className="text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} Andarg Worku. All rights reserved.
        </p>

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
        </div>
      </footer>
    </>
  );
};

export default Footer;


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
