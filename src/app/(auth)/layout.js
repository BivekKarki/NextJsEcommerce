'use client'
import React from 'react'
import Image from 'next/image';
import ecommerce from '../../../public/assets/images/ecommerce.png'


function AuthLayout({children}) {
    
  return (
      <div className='shadow-xl min-h-[80svh] rounded-2xl flex items-center justify-between p-10 lg:m-10'>
           <div className='w-1/2 mr-10 p-5 hidden md:block'>
             <Image 
               src={ecommerce}
               alt='Auth Image'
               height={300}
               width={500}
               className='w-full'
             />
           </div>
     
           {children}
         </div>
    
  )
}

export default AuthLayout;
