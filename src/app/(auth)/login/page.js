import LoginForm from '@/app/components/auth/LoginForm';
import Image from 'next/image';
import React from 'react'
import ecommerce from '../../../../public/assets/images/ecommerce.png'

export const metadata = {
  title: "Login",
};

function LoginPage() {
  return (
    <div className="w-full md:w-2/3 lg:w-1/3">
      <h3 className="text-3xl mb-5 font-bold text-textColor dark:text-white">
        Login
      </h3>
      <LoginForm />
    </div>

   
  )
}

export default LoginPage;
