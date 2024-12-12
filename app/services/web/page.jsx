"use client"

import { motion } from 'framer-motion';
import { FaReact,  FaBootstrap, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiTypescript, SiChakraui, SiStyledcomponents, SiMongodb } from 'react-icons/si';

const Web = () => {
  const backendTechnologies = [
    { name: 'React', icon: <FaReact className="text-blue-500 text-4xl" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-500 text-4xl" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="text-black text-4xl" /> },
    { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-500 text-4xl" /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-blue-600 text-4xl" /> },
    { name: 'Bootstrap', icon: <FaBootstrap className="text-purple-600 text-4xl" /> },
    { name: 'Chakra UI', icon: <SiChakraui className="text-green-500 text-4xl" /> },
    { name: 'Styled Components', icon: <SiStyledcomponents className="text-pink-500 text-4xl" /> },
    { name: 'CSS', icon: <FaCss3Alt className="text-blue-700 text-4xl" /> },
    { name: 'HTML', icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
    { name: 'Shadcn', icon: <SiMongodb className="text-green-500 text-4xl" /> },
  ];

  return (
    <div className=" bg-gray-900 flex flex-col items-center justify-center ">
      <div>
        <h4 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-accent mt-10">
          Frontend Development Skills
        </h4>
        <p className="p-10">
          I have experience as a frontend systems developer, specializing in the following technologies:
        </p>

        <div className="w-screen max-w-full overflow-hidden">
          <div className="relative w-full h-60 flex items-center">
            <motion.div
              className="flex space-x-16"
              initial={{ x: '100%' }}
              animate={{ x: '-100%' }}
              transition={{delay:1, duration: 25, repeat: Infinity, ease: 'linear' }}
            >
              {backendTechnologies.map((tech, index) => (
                <div
                  key={index}
                  className="flex flex-1 gap-4 items-center space-y-2 text-center min-w-[150px]"
                >
                  {tech.icon}
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

export default Web;



