import { getAllProducts } from '@/api/products'
import ProductCard from '@/components/products/cards';
import { PRODUCT_ROUTES } from '@/constants/routes';
import Link from 'next/link';
import React from 'react'

async function productPage() {
  const data = await getAllProducts();
  return (
    <div className='dark:bg-gray-700 '>
      <div className='max-w-screen-xl mx-auto w-full py-8 '>
        <div className='flex items-center justify-between px-5'>
          <h1 className='text-center md:text-left text-2xl md:text-4xl font-semibold py-4 text-textColor dark:text-white'>Featured Products</h1>
          <Link href={`${PRODUCT_ROUTES}/add/`} className='bg-gray-200 px-5 py-2 rounded hover:bg-gray-300'>Add Product</Link>
        </div>
        <div className='grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 py-5 px-3'>
          {data.map((product,index)=>(
            <ProductCard key={index} product={product} />
          ))}
        </div>
        
        <br/>
        Products page
      </div>
    </div>
  )
}

export default productPage
