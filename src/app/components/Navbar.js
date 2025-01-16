'use client'
import navLinks from '@/constants/navlinks'
import { HOME_ROUTES } from '@/constants/routes';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

function Navbar() {
    
    const pathName = usePathname();
    
  return (
      <nav className=' md:w-1/2 flex justify-between text-white'>
        {navLinks.map((navLink, index) => {
            const isActive = 
            navLink.route == HOME_ROUTES
            ? pathName === navLink.route 
            : pathName.startsWith(navLink.route);
            return (
                <Link key={index} href={navLink.route} className={isActive? 'font-semibold px-3 py-2 text-yellow-300':'px-3 py-2'}>
                    {navLink.label}
                </Link>
            )})}
      </nav>
  );
}

export default Navbar;
