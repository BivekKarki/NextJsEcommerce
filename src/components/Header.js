import config from '@/config/config.js'
import navLinks from '@/constants/navlinks'
import { HOME_ROUTES, lOGIN_ROUTES } from '@/constants/routes'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (

  <div className="antialiased bg-gray-100 dark-mode:bg-gray-900 shadow-lg sticky top-0">
  <div className="w-full text-gray-700 bg-white dark:text-gray-200 dark:bg-gray-900">
    <div  className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
      <div className="flex flex-row items-center justify-between p-4">
        <a href={HOME_ROUTES} 
            className="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline">
            {config.appName}
        </a>
        <button className="rounded-lg md:hidden focus:outline-none focus:shadow-outline">
          <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
            <path  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" ></path>
            <path   d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" ></path>
          </svg>
        </button>
      </div>
      <nav  className="flex-col flex-grow hidden pb-4 md:pb-0 md:flex md:justify-end md:flex-row">
        {navLinks.map((navlink, index)=>(
            <Link 
            key={index} 
            href={navlink.route}
            className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" 
            >
                {navlink.label}
            </Link>
        ))}

        <Link href={lOGIN_ROUTES}  className="px-4 py-2 mt-2 text-sm font-semibold font-nunito bg-primary-500 text-white rounded-lg dark:bg-transparent dark:hover:bg-gray-600 dark:focus:bg-gray-600  md:mt-0 md:ml-4 hover:bg-primary-600 focus:bg-primary-600 focus:outline-none focus:shadow-outline" 
            >Login</Link>
       
      </nav>
    </div>
  </div>
</div>
  )
}

export default Header
