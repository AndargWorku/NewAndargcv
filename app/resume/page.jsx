"use client";

import {
  SiMongoose,
  SiMongodb,
  SiDjango,
  SiTailwindcss,
  SiNextdotjs,
  SiStyledcomponents,
  SiChakraui,
  SiMysql,
  SiSqlalchemy,
  SiTypescript,
  SiShadcnui,
} from "react-icons/si";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNode,
  FaBootstrap,
  FaPhp,
  FaLaravel,
  FaPython,
  FaGit,
} from "react-icons/fa";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { TbBrandReactNative } from "react-icons/tb";
const about = {
  title: "About me",
  description:
    "I am Andarg Work, a skilled, adaptable, and effective communicator in programming. If you require a developer, please feel free to reach out through the following options:",

  info: [
    {
      fieldName: "Name",
      fieldValue: "Andarg Worku",
    },
    {
      fieldName: "phone",
      fieldValue: "(+251) 0918883711",
    },
    {
      fieldName: "Expriance",
      fieldValue: "3+ Years",
    },
    {
      fieldName: "Email",
      fieldValue: "andargworku8240@gmail.com ",
    },
    {
      fieldName: "Natinality",
      fieldValue: "Ethiopian",
    },

    {
      fieldName: "Language",
      fieldValue: "English , Amharic",
    },
    {
      fieldName: "Frealance",
      fieldValue: "Avalaible",
    },
  ],
};
const experience = {
  icon: "/",
  title: " My expriance",
  description:
    "I have extensive experience as a frontend, backend, and full-stack developer. Let's see",
  items: [
    {
      company: "Frelance",
      position: "Full Stack Developer",
      duration: " present",
    },
    {
      company: " At Sheba Tech for Melly's fashion",
      position: "Frontend Developer",
      duration: " 2023-2024",
    },
    {
      company: "At Ever Link Tech and Degital solution",
      position: "Full Stack Developer and Leactureer",
      duration: " 2022-2023",
    },
  ],
};
const education = {
  icon: "/",
  title: " My education",
  description:
    "I have expanded my knowledge through various methods, including the following:",
  items: [
    {
      Institution: "From online course platform",
      Degree: "Full stack Developer",
      duration: " 2022",
    },
    {
      Institution: "From udemy online course ",
      Degree: "Mobile Development",
      duration: " 2024",
    },
    {
      Institution: "From Addis Ababa Science and Technogy Universtiy",
      Degree: " BSc of Software Engineering",
      duration: " 2018-2022",
    },
  ],
};
const skills = {
  title: " My Skills",
  description:
    "I have acquired extensive skills over the years; here are the technologies I specialize in:",
  skillList: [
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <TbBrandReactNative />,
      name: "React Native",
    },

    {
      icon: <SiTailwindcss />,
      name: "Tailwind css",
    },
    {
      icon: <FaJs />,
      name: "Javascript & Typescript",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next js",
    },
    {
      icon: <FaGit />,
      name: "Verstion Controll",
    },
    {
      icon: <FaNode />,
      name: "Node js",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
    },
    {
      icon: <SiMongoose />,
      name: "Mongoose",
    },
    {
      icon: <SiMysql />,
      name: "MYSQL",
    },
    {
      icon: <SiSqlalchemy />,
      name: "SQL",
    },
    {
      icon: <FaPhp />,
      name: "PHP",
    },
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <SiDjango />,
      name: "Django",
    },
    {
      icon: <FaLaravel />,
      name: "Laravel",
    },
    {
      icon: <FaBootstrap />,
      name: "Bootstrap",
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript",
    },
    {
      icon: <SiStyledcomponents />,
      name: "StyledComponents",
    },
    {
      icon: <SiShadcnui />,
      name: "Shadcnui",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className=" min-h-[88vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className=" container mx-auto">
        <Tabs
          defaultValue="experience"
          className=" flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className=" flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          <div className=" min-h-[78px] w-full">
            <TabsContent value="experience" className="w-full">
              <div className=" flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className=" text-4xl font-bold">{experience.title}</h3>
                <p className=" max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className=" grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className=" bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className=" text-accent">{item.duration}</span>
                          <h3 className=" text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className=" flex items-center gap-3">
                            <span className=" w-[6px] h-[6px] rounded-full bg-accent"></span>

                            <p className=" text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="education" className="w-full">
              <div className=" flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className=" text-4xl font-bold">{education.title}</h3>
                <p className=" max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className=" grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className=" bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className=" text-accent">{item.duration}</span>
                          <h3 className=" text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.Degree}
                          </h3>
                          <div className=" flex items-center gap-3">
                            <span className=" w-[6px] h-[6px] rounded-full bg-accent"></span>

                            <p className=" text-white/60">{item.Institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* //skillList */}
            <TabsContent value="skills" className="w-full h-full">
              <div className=" flex flex-col gap-[30px]">
                <div className=" flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className=" text-4xl font-bold">{skills.title}</h3>
                  <p className=" max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
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
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* for about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className=" flex flex-col gap-[30px]">
                <h3 className=" text-4xl font-bold">{about.title}</h3>
                <p className=" max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className=" grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className=" flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className=" text-white/60">{item.fieldName}</span>
                        <span className=" text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
