'use client'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { MdOutlineEmail } from 'react-icons/md'
import { toast, ToastContainer } from 'react-toastify';
import Spinner from '../Spinner';
import Link from 'next/link';
import { HOME_ROUTES, lOGIN_ROUTES } from '@/constants/routes';
import PasswordField from './PasswordField';
import { PASSWORD_REGEX } from '@/constants/regex';
import { signUp } from '@/api/auth';
import { useRouter } from 'next/navigation';

function RegisterForm() {
    const {
        register, 
        formState:{ errors },
        handleSubmit,
        watch
    } = useForm();


    const [loading, setLoading] = useState(false);
    
    const password = watch("password");

    const router = useRouter();

    async function submitForm(data){
        setLoading(true);
        try {
            const response = await signUp(data)
            localStorage.setItem("authToken", response.token);
            toast.success("Register successful",{
                autoClose: 1500,
                onClose: ()=> router.push(HOME_ROUTES),
            });
            setLoading(false);
        } catch (error) {
            console.log(error);
            toast.error(error.response.data, {
                autoClose: 1500,
            })
        }finally{
            setLoading(false);
        }
    }

  return (
    <>
        <form onSubmit={handleSubmit(submitForm)}>
            <div className='py-2'>
                        
                <div className='flex items-end border-b border-gray-500 dark:text-white'>
                <MdOutlineEmail className='mb-1.5'/>
                <input 
                    type='text' 
                    id='name' 
                    {...register("name", {
                        required: 'Full name is required'
                    })}
                    placeholder='Full Name'
                    className='  px-3 py-1 w-full  mt-1   focus:outline-none'
                />
                </div>
                <p className='text-red-500 text-sm'>{errors.name?.message}</p>
            </div>

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

                    <PasswordField 
                        id="password" 
                        placeholder="Password" 
                        {...register("password",{
                            required: "Password cannot be empty",
                            pattern: {
                                value: PASSWORD_REGEX,
                                message: "Password must conatin uppercase, lowercase, numbers and special characters"
                            },
                            minLength: {
                                value: 6,
                                message: "password length must be greater than"
                            },
                        }
                    
                    )}
                    />
                    <p className='text-red-500 text-sm'>{errors.password?.message}</p>

                    
                    <PasswordField 
                        id="confirmPassword" 
                        placeholder="Confirm Password" 
                        {...register("confirmPassword",{
                            required: "Confirm Password cannot be empty",
                            
                            validate:(value)=>{
                                return value == password || "Password do not match";
                                // value!=password?"Password do not match":true;
                            }
                        })}
                    />
                    <p className='text-red-500 text-sm'>{errors.confirmPassword?.message}</p>


                    

            <button
                type="submit"
                disabled={loading}
                className="flex items-center mt-3 bg-primary-600 text-white px-10 py-2 rounded cursor-pointer disabled:bg-primary-300 disabled:cursor-not-allowed hover:bg-primary-700"
            >
                {loading ? <Spinner className="w-6 h-6  mr-2" /> : null}
                Register
            </button>

            <Link
                href={lOGIN_ROUTES}
                className="text-primary-400 block mt-6 hover:underline dark:text-white"
            >
                Already have an  account?
            </Link>
                <ToastContainer />

        </form>
    </>
  )
}

export default RegisterForm
