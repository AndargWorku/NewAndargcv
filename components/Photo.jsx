
"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  // Dimensions for the image and circle
  const circleRadius = 260; // Outer circle radius
  const imageSize = 250; // Image size (adjust as needed)
  const borderRadius = imageSize / 2; // Circular border radius for the image

  return (
    <div className="w-full h-full flex items-center justify-center relative">
      {/* Main animation container */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.5, duration: 0.5, ease: "easeIn" },
        }}
      >
        {/* Circle Animation */}
        <motion.svg
          width={circleRadius}
          height={circleRadius}
          viewBox={`0 0 ${circleRadius} ${circleRadius}`}
          xmlns="http://www.w3.org/2000/svg"
          className="absolute"
        >
          <motion.circle
            cx={circleRadius / 2}
            cy={circleRadius / 2}
            r={(circleRadius - 8) / 2} // Adjusting for stroke width
            stroke="#00ff99"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            initial={{ strokeDasharray: "0 100" }}
            animate={{
              strokeDasharray: "120 150",
              rotate: 360,
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.svg>

        {/* Image container */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 1,
            transition: { delay: 1, duration: 0.8, ease: "easeInOut" },
          }}
          className="overflow-hidden"
          style={{
            width: imageSize,
            height: imageSize,
            borderRadius: borderRadius,
          }}
        >
          <Image
            src="/assets/photo.jpg" // Ensure this is the correct image path
            alt="Decorative Photo"
            priority
            quality={100}
            width={imageSize}
            height={imageSize}
            className="object-cover"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Photo;


