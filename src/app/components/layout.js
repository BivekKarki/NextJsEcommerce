import React from 'react'

export default function Componentlayout({children}) {
  return (
    <div>
        <h1 className='text-5xl text-white mb-5'>This is component layout header</h1>
      {children}
    </div>
  )
}

