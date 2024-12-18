"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select,SelectContent,SelectGroup,SelectItem,SelectLabel,SelectTrigger,SelectValue } from "@/components/ui/select"
import {FaPhoneAlt, FaEnvelope, FaMapMarkerAlt} from "react-icons/fa"
import {motion} from "framer-motion"
import emailjs from '@emailjs/browser';
import { useRef } from "react"
const info=[
  {
    icon:<FaPhoneAlt/>,
    title:"phone",
    description:"(+251) 0918883711"
  },
  {
    icon:<FaEnvelope/>,
    title:"Email",
    description:"andargworku@gmail.com"
  },
  {
    icon:<FaMapMarkerAlt/>,
    title:"Address",
    description:" Addis Ababa, Ethiopia"
  }
]



const Contact = () => {
  const form=useRef();
  const sendEmail = (e) => {
    e.preventDefault();
 
    emailjs.sendForm('service_745utln', 'template_jbgaoct', form.current, 'Ibzy8Tb9v8YEDIdcF5Vel')
    e.target.reset()
   };
  return (
    <motion.section
    initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className=" py-6"
    >
      <div className=" container mx-auto">
        <div className=" flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className=" xl:w-[54%] order-2 xl:order-none" >
            <form ref={form} onSubmit={sendEmail} className=" flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className=" text-4xl text-accent">Let's Work together</h3>
              <p className=" text-white/60">Kindly send any message.</p>
               <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="fristname" name="fristname" placeholder="Fristname" />
                <Input type="lastname" name="lastname" placeholder="Lastname" />
                <Input type="email"name="email" placeholder="Email Address" />
                <Input type="phone" name="phone" placeholder="phone Number" />
               </div>
             <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder= "select a service"/>
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel name="select">Select a service</SelectLabel>
                  <SelectItem value="web">Web Developement</SelectItem>
                  <SelectItem value="back">Backend Developement</SelectItem>
                  <SelectItem value="full">Full Stack Developement</SelectItem>
                  <SelectItem value="mobile">Mobile App Developement</SelectItem>
                </SelectGroup>
              </SelectContent>
             </Select>
             <Textarea name="message"
             className=" h-[200px]" placeholder=" Type your message here"/>

           <Button size="md" type="submit" className="max-w-40">Send Message</Button>
            </form>

          </div>
          <div className=" flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
           <ul className=" flex flex-col gap-10">
            {info.map((item,index)=>{
              return(
                <li key={index} className=" flex items-center gap-6">
                  <div className=" w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className=" text-[28px] ">{item.icon}</div>


                  </div>
                  <div className=" flex-1">
                    <p className=" text-white/60 ">{item.title}</p>
                    <h3 className=" text-xl">{item.description}</h3>
                  </div>
                </li>
              )
            })}

           </ul>

          </div>

        </div>

      </div>



    </motion.section>
  )
}

export default Contact