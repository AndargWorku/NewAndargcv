import Link from 'next/link';
import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { RxResume } from "react-icons/rx";
const socials=[
    {icon:<FaGithub/>, path: "https://github.com/AndargWorku"},
    {icon:<FaLinkedin/>, path: "https://www.linkedin.com/in/andarg-worku-bb957823b/"},
    {icon:<RxResume/>, path: "https://resume-liard-xi.vercel.app/"},
    {icon:<MdOutlineMarkEmailUnread/>, path: "andargworku8240@gmail.com"},
]
const Socials = ({containerStyles, iconsStyles}) => {
  return (
    <div className={containerStyles}>
        {
            socials.map((item,index)=>{
                return(
                    <Link key={index} href={item.path} className={iconsStyles}>{item.icon}</Link>
                )
            })
        }

    </div>
  )
}

export default Socials