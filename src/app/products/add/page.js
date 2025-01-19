import ProductAddForm from '@/components/products/Form'
import React from 'react'

function AddProductPage() {
  return (
    <div className='dark:bg-gray-800'>
      <div className='container mx-auto p-20'>
        <div className='flex items-center flex-col'>
          <h2 className='text-3xl font-medium dark:text-white text-textColor'>Add Product</h2>
          <ProductAddForm />
        </div>
      </div>
    </div>
  )
}

export default AddProductPage
