import React from 'react'
import { useParams } from 'react-router-dom'
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'

function ProductsDetailPage({products}) {
  
  const { id } = useParams();
  
  const onAddFx = () => {
    alert("Add to cart - Placeholder")
  }

  return (
    <>
      <ItemDetailContainer products={products} onAdd={onAddFx} id={id}/>
    </>
  );
}

export default ProductsDetailPage;