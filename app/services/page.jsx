"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

// Updated services data with meaningful descriptions and href values
const services = [
  {
    num: "01",
    title: "Web Development",
    description: "Build responsive and high-performing websites.",
    href: "/services/web-development",
  },
  {
    num: "02",
    title: "Mobile Development",
    description: "Create user-friendly mobile applications.",
    href: "/services/mobile-development",
  },
  {
    num: "03",
    title: "FullStack Development",
    description: "End-to-end development for scalable solutions.",
    href: "/services/fullstack-development",
  },
  {
    num: "04",
    title: "Backend Development",
    description: "Efficient and secure server-side applications.",
    href: "/services/backend-development",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 ">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col justify-center items-center gap-6 group"
            >
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-transparent group-hover:text-white transition-all duration-500">
                  {service.num}
                </div>
                <Link
                  href={service.href}
                  className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                >
                  <BsArrowDownRight className="text-primary text-3xl" />
                </Link>
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                {service.title}
              </h2>
              <p className="text-white/60 text-center">{service.description}</p>
              <div className="border-b border-white/28 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;



// " use client";

// import { BsArrowDownRight } from "react-icons/bs";
// import Link from "next/link";
// import { motion } from "framer-motion";
// const services = [
//   {
//     num: "01",
//     title: "Web Development",
//     description: "something",
//     href: ""
//   },
//   {
//     num: "02",
//     title: "Mobile Development",
//     description: "something",
//      href: ""
//   },
//   {
//     num: "03",
//     title: "FullStack Development",
//     description: "something",
//      href: ""
//   },
//   {
//     num: "04",
//     title: "Backend Development",
//     description: "something",
//      href: ""
//   },
// ];

// const Services = () => {
//   return (
//     <section className=" min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
//       <div className=" container mx-auto">
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{
//             opacity: 1,
//             transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
//           }}
//           className=" grid grid-cols-1 md:grid-cols-2 gap-[60px]"
//         >
//           {services.map((service, index) => {
//             return (
//               <div
//                 key={index}
//                 className=" flex-1 flex flex-col justify-center items-center gap-6 group"
//               >
//                 <div className=" w-full flex justify-between items-center">
//                   <div className=" text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
//                     {service.num}
//                   </div>
//                   <Link href={service.href}
//                   className=" w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
//                     <BsArrowDownRight className=" text-primary text-3xl" />
//                   </Link>
                  
//                 </div>
//                 <h2 className=" text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
//                 <p className=" text-white/60">{service.description}</p>
//                 <div className=" border-b border-white/28 w-full"></div>
//               </div>
//             );
//           })}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Services;
