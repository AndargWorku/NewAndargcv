

"use client"

import { motion } from 'framer-motion';
import { FaDatabase, FaNodeJs, FaPhp, FaPython } from 'react-icons/fa';
import { SiMongodb, SiDjango, SiExpress } from 'react-icons/si';

const Backend = () => {
  const backendTechnologies = [
    { name: 'Mongoose', icon: <SiMongodb className="text-green-500 text-4xl" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-500 text-4xl" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-600 text-4xl" /> },
    { name: 'Express', icon: <SiExpress className="text-gray-800 text-4xl" /> },
    { name: 'PHP', icon: <FaPhp className="text-indigo-500 text-4xl" /> },
    { name: 'Python', icon: <FaPython className="text-blue-500 text-4xl" /> },
    { name: 'Django', icon: <SiDjango className="text-green-700 text-4xl" /> },
  ];

  return (
    <div className=" bg-gray-900 flex flex-col items-center justify-center ">
    <div>
    <h4 className="text-3xl sm:text-4xl md:text-5xl font-bold   text-center text-accent mt-6">
        Backend Developer Skills
      </h4>
      <p className=' p-10 '>I have experience as a backend systems developer, specializing in the following technologies:</p>

      <div className="w-screen max-w-full overflow-hidden">
        <div className="relative w-full h-60 flex items-center">
          <motion.div
            className="flex space-x-16"
            initial={{ x: '100%' }}
            animate={{ x: '-100%' }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
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

export default Backend;

