import Image from 'next/image'
import React from 'react'
import ford from '../../../public/assets/images/ford.jpg'
import Link from 'next/link'
import { CiEdit } from "react-icons/ci";
import { PRODUCT_ROUTES } from '@/constants/routes'

function ProductCard( {product}) {
  return (
    <div className=' p-5 rounded-2xl shadow max-w-fit bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900'>
        <Image alt={product.name} src={ford} width={500} height={500} />
      <div className='py-3'>
      <span className="inline-flex items-center rounded-md bg-primary-50 px-2 py-1 text-xs font-medium text-primary-700 ring-1 ring-inset ring-primary-700/10">
        {product.brand}
      </span>
      <div className='flex justify-between items-center'>
      <h2 className='text-xl font-semibold py-1 capitalize dark:text-white hover:underline'>
            <Link className='' href={`${PRODUCT_ROUTES}/${product._id}`}>{product.name}</Link>
        </h2>
        <Link href={`${PRODUCT_ROUTES}/edit/${product._id}`} className='p-1 hover:text-gray-900'>
            <CiEdit />
        </Link>
      </div>
       
        <p className='text-sm text-zinc-600 dark:text-gray-300'>lorem ipsum ksajfoids dsoifjdsiojf dsjidsfiodsjfi</p>
        <p className='mt-1'>
            <span className='text-xl text-slate-600 pr-1'>$</span>
            <span className='dark:text-white'>{product.price}</span>
        </p>
      </div>
    </div>
  )
}

export default ProductCard
