import axios from 'axios';
import React from 'react'

export async function generateMetadata({params}) {
    const id = await params;

    return {
        title: `ProductById ${id.productId}`,
        description: "Product description"
    }
    
}


function ProductByIdLayout({children}) {
  return (
    <div>
      ProductByIdLayout 

      {children}
    </div>
  )
}

export default ProductByIdLayout
