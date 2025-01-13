import Link from 'next/link'
import React from 'react'

function AuthLayout({children}) {
  return (
    <div>
      <nav className='flex justify-around p-5'>
        <Link href={'/login'}>Login</Link>
        <Link href={'/register'}>Register</Link>
        <Link href={'/forgot-password'}>Forgot password</Link>
      </nav>
      <div>{children}</div>
    </div>
  )
}

export default AuthLayout;
