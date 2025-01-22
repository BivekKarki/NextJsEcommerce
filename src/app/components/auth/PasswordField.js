'use client'
import React, { useState } from 'react'
import { BsEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';
import { RiLockPasswordLine } from 'react-icons/ri';

function PasswordField(props) {

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    function togglePasswordVisiblity(){
        return setIsPasswordVisible(!isPasswordVisible);
    }

  return (
    <div className='py-2'>
        <div className='flex items-center border-b border-gray-500 dark:text-white '>
        <RiLockPasswordLine />
        <input 
            type={isPasswordVisible?"text":"password"} 
            className=' px-3 py-1 w-full mt-1 focus:outline-none'
            {...props}
        />
        {
            isPasswordVisible? <BsEyeFill onClick={togglePasswordVisiblity}/> : <BsFillEyeSlashFill  onClick={togglePasswordVisiblity}/>
        }
        </div>
            {/* <p className='text-red-500 text-sm'>{errors.password?.message}</p> */}
    </div>
  )
}

export default PasswordField
