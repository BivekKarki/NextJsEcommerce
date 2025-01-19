'use client'
import React from 'react'

function ProductError({error}) {
  return (
    <div>
      {error.message}
    </div>
  )
}

export default ProductError
