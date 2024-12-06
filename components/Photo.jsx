

"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      {/* Container animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >
        {/* Image animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[250px] h-[250px] xl:w-[300px] xl:h-[300px] mix-blend-lighten absolute "
        >
          <Image
            src="/assets/photo.jpg" // Adjusted the path for better Next.js compatibility
            priority
            quality={100}
            fill
            alt="Decorative Photo"
            className=" object-contain rounded-full"
          />
        </motion.div>

        {/* Circle animation */}
        <motion.svg
          className="w-[388px] xl:w-[406px] h-[300px] xl:h-[406px]"
          fill="none"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="205"
            cy="205"
            r="200"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: 120,
            }}
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 28,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;



