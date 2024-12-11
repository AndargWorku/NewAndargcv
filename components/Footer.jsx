"use client";

import Link from "next/link";
// components/Footer.js
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <div className=" border border-gray-600"/>
    <footer className=" bg-primary text-white py-2 ">
      <div className="container mx-auto px-2">
        <div className="text-start">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Andarg Worku. All rights reserved.
          </p>
        </div>
        {/* <div className="flex flex-1 md:flex-row justify-end items-center"> */}
          <div className="flex flex-1 md:flex-row justify-end space-x-6 mb-0 md:mb-0 ">
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
              href="andargworku8240@gmail.com"
              className="flex items-center space-x-2 hover:text-gray-400"
            >
              <FaEnvelope />
              <span>Email</span>
            </Link>
          </div>
        {/* </div> */}
      </div>
    </footer>
    </>
  );
};

export default Footer;
