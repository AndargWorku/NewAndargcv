
"use client";

import { motion } from "framer-motion";
import { FaDatabase, FaNodeJs, FaPhp, FaPython } from "react-icons/fa";
import { SiMongodb, SiDjango, SiExpress, SiTypescript, SiReact, SiTailwindcss } from "react-icons/si";

const Mobile = () => {
  // Map technology names to their corresponding icons
  const iconMap = {
    "react native": <SiReact className="text-blue-500 text-4xl" />,
    typescript: <SiTypescript className="text-blue-700 text-4xl" />,
    javascript: <FaNodeJs className="text-green-600 text-4xl" />,
    "tailwind css": <SiTailwindcss className="text-teal-500 text-4xl" />,
    shadcn: <FaPhp className="text-indigo-500 text-4xl" />,
  };

  const backendTechnologies = [
    { name: "react native" },
    { name: "typescript" },
    { name: "javascript" },
    { name: "tailwind css" },
    { name: "shadcn" },
  ];

  return (
    <div className=" bg-gray-900 flex flex-col items-center justify-center">
      <div>
        <h4 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-accent  mt-6">
          Mobile Developer Skills
        </h4>
        <p className=" p-10">
          I have experience as a mobile systems developer, specializing in the
          following technologies: "
        </p>

        <div className="w-screen max-w-full overflow-hidden">
          <div className="relative w-full h-60 flex items-center">
            <motion.div
              className="flex space-x-16"
              initial={{ x: "100%" }}
              animate={{ x: "-100%" }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            >
              {backendTechnologies.map((tech, index) => (
                <div
                  key={index}
                  className="flex flex-1 gap-4 items-center space-y-2 text-center min-w-[150px]"
                >
                  {/* Render the appropriate icon based on the technology name */}
                  {iconMap[tech.name.toLowerCase()] || (
                    <FaDatabase className="text-gray-500 text-4xl" />
                  )}
                  <span className="text-lg sm:text-xl md:text-2xl font-medium text-white">
                    {tech.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
