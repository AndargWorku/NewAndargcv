
 "use client"
import Link from 'next/link'
import React from 'react'
import Nav from './Nav'
import { Button } from './ui/button'
import MobileNav from './MobileNav'

const Header = () => {
  return (
 <header className="py-8 xl:py-12 text-white -mb-5">
    <div className=' container mx-auto flex justify-between items-center'> 
        <Link href="/">
        <h1 className=' text-4xl font-semibold'>Andarg
            <span className=' text-accent'>.</span>
        </h1>
        </Link>
        {/* for disktop divce responsive */}
        <div className="hidden xl:flex items-center gap-8">
            <Nav/>
            <Link href="/contact">
            <Button>Hire Me</Button>
            </Link>
        </div>
 {/* for mobile */}
 <div className="xl:hidden">
    <MobileNav/>
 </div>

    </div>

 </header>
  )
}

export default Header