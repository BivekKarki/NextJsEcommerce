import { getAllProducts } from '@/api/products'
import ProductCard from '@/components/products/cards';
import { PRODUCT_ROUTES } from '@/constants/routes';
import Link from 'next/link';
import React from 'react'

async function productPage() {
  const products = await getAllProducts();
  return (
    <>
    <div className="flex items-center justify-between px-5">
      <h1 className="text-center md:text-left text-3xl md:text-4xl font-semibold text-textColor px-2 dark:text-white">
        Featured Products
      </h1>
      <Link
        href={`${PRODUCT_ROUTES}/add`}
        className="bg-gray-200 px-5 py-2 rounded"
      >
        Add Product
      </Link>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-5 px-3">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  </>
  )
}

export default productPage
