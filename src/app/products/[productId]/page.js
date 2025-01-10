async function ProductById({ params }) {
    
    const ids = await params;
  return (
    <div>
      ProductById : {ids.productId}
    </div>
  )
}

export default ProductById;

