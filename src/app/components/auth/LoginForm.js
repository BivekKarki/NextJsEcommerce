'use client'
import { FORGOT_PASSWORD_ROUTES, HOME_ROUTES, RESGISTER_ROUTES } from '@/constants/routes';
import Link from 'next/link';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { MdOutlineEmail } from 'react-icons/md';
import { toast, ToastContainer } from 'react-toastify';
import Spinner from '../Spinner';
import { login } from '@/api/auth';
import { useRouter } from 'next/navigation';
import PasswordField from './PasswordField';

export default function LoginForm() {

    const {
        register, 
        formState: {errors},
        handleSubmit,
    } = useForm();
    const [loading, setLoading] = useState(false);
   
    const router = useRouter();

    async function submitForm(data){
        setLoading(true);
        try {
            const response = await login(data.email, data.password)
            localStorage.setItem("authToken", response.token);
            toast.success("Login successful",{
                autoClose: 1500,
                onClose: ()=> router.push(HOME_ROUTES),
            });
            router.push(HOME_ROUTES);
            setLoading(false);
        } catch (error) {
            console.log(error);
            toast.error(error.response.data,{
                autoClose: 1500,
            })
        }finally{
            setLoading(false);
        }
    }

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <div className='py-2'>
            
            <div className='flex items-end border-b border-gray-500 dark:text-white'>
            <MdOutlineEmail className='mb-1.5'/>
            <input 
                type='text' 
                id='email' 
                {...register("email", {
                    required: 'Email is required'
                })}
                placeholder='Email'
                className='  px-3 py-1 w-full  mt-1   focus:outline-none'
            />
            </div>
            <p className='text-red-500 text-sm'>{errors.email?.message}</p>
        </div>

        <PasswordField 
            id="password" 
            placeholder="Password" 
            {...register("password",{
                required: "Password cannot be empty"
            })}
        />
        <p className='text-red-500 text-sm'>{errors.password?.message}</p>

        
        {/* <div className='py-2'>
            

            <div className='flex items-center border-b border-gray-500 dark:text-white '>

            <RiLockPasswordLine />
            <input 
                type={isPasswordVisible?"text":"password"} 
                id='password' 
                {...register("password",{
                    required: "Password cannot be empty"
                })}
                placeholder='Password'
                className=' px-3 py-1 w-full mt-1 focus:outline-none'
            />

            {
                isPasswordVisible? <BsEyeFill onClick={togglePasswordVisiblity}/> : <BsFillEyeSlashFill  onClick={togglePasswordVisiblity}/>
            }
            
            
            </div>
                <p className='text-red-500 text-sm'>{errors.password?.message}</p>
        </div> */}

        <div className="flex flex-col sm:flex-row justify-between mb-3">
        <div>
          <input type="checkbox" id="rememberMe" />
          <label htmlFor="rememberMe" className="text-sm ml-2 dark:text-white ">
            Remember me
          </label>
        </div>

        <Link
          href={FORGOT_PASSWORD_ROUTES}
          className="text-sm underline text-primary-400 hover:text-primary-600 dark:text-white hover:dark:text-gray-200"
        >
          Forgot password?
        </Link>
      </div>


      <button
        type="submit"
        disabled={loading}
        className="flex items-center mt-3 bg-primary-600 text-white px-10 py-2 rounded cursor-pointer disabled:bg-primary-300 disabled:cursor-not-allowed hover:bg-primary-700"
      >
        {loading ? <Spinner className="w-6 h-6  mr-2" /> : null}
        Login
      </button>

      <Link
        href={RESGISTER_ROUTES}
        className="text-primary-400 block mt-6 hover:underline dark:text-white"
      >
        Create account?
      </Link>
        <ToastContainer />
    </form>
  )
}
