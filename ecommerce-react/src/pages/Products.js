import React from 'react'
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'

function ProductsPage({products}) {
  const onAddFx = () => {
    alert("Add to cart - Placeholder")
  }

  return (
    <ItemDetailContainer products={products} onAdd={onAddFx}/>
  );
}

export default ProductsPage;