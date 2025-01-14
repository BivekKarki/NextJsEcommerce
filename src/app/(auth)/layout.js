'use client'
import Link from 'next/link'
import React, { useState } from 'react'

function AuthLayout({children}) {
    const [value, setValue] = useState("");

  return (
    <div>
      <nav className='flex justify-around p-5'>
        <Link href={'/login'}>Login</Link>
        <Link href={'/register'}>Register</Link>
        <Link href={'/forgot-password'}>Forgot password</Link>
      </nav>
      
      <input 
        onChange={(e)=>{setValue(e.target.value)}} 
        type='text' 
        className='text-black'
    />

      <button 
        onClick={()=>{
            alert(value);
        }}
      >Submit
      </button>

      <div>{children}</div>
    </div>
  )
}

export default AuthLayout;
