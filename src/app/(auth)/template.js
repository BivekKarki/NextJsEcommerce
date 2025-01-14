'use client'
import Link from 'next/link';
import React, { useState } from 'react'

function AuthTemplate({ children }) {
    const [value, setValue] = useState("");

  return (
    <div className='mt-5'>
        <h2 className='text-xl'>Template</h2>
      
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

export default AuthTemplate
