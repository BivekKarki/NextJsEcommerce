'use client'
import React from 'react'

function ErrorPage({error, reset}) {
  return (
    <div>
      {error.message}

      <button className='bg-white rounded text-black ' onClick={reset}>Refresh</button>
    </div>
  )
}

export default ErrorPage
