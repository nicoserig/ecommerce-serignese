import React from 'react'
import ItemDetail from '../components/ItemDetail/ItemDetail'

function ProductsPage({products}) {
  const onAddFx = () => {
    alert("Add to cart - Placeholder")
  }

  return (
    <div>
      <ItemDetail title={products[3].title} price={products[3].price} author={products[3].author} description={products[3].longDescription} stock={products[3].stock} prodImg={products[3].img} onAdd={onAddFx}/>
    </div>
  );
}

export default ProductsPage;