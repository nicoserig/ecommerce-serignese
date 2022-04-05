import React from 'react'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'

function ProductsAllPage({products}) {
  return (
    <ItemListContainer title={'Los más vendidos'} allProducts={products}/>
  );
}

export default ProductsAllPage;