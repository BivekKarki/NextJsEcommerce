import { getProductById } from '@/api/products';
import ProductAddForm from '@/components/products/Form'
import React from 'react'

export default async function EditProduct({params}) {
    
    const id = (await params).productId;

    const product = await getProductById(id);
  return (
    <div className='dark:bg-gray-800'>
      <div className='container mx-auto p-4 md:p-10 lg:p-20'>
        <div className='flex items-center flex-col'>
          <h2 className='text-3xl font-medium dark:text-white text-textColor'>Edit Product Details</h2>
          <ProductAddForm isEditing={true} product={product}/>
        </div>
      </div>
    </div>
  )
}
