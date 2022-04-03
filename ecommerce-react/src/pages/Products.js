import React from 'react'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import ItemListDetails from '../components/ItemListDetails/ItemListDetails';
import ItemDetail from '../components/ItemDetail/ItemDetail'

function ProductsPage({products}) {
  
  return (
    <div>
      {console.log(products[0].author)}
      {/* <ItemListContainer title={'¡Nuevos ingresos!'} allProducts={products}/> */}
      <ItemDetail title={products[0].title} price={products[0].price} author={products[0].author} description={products[0].longDescription} stock={products[0].stock} prodImg={products[0].img}/>
    </div>
  );
}

export default ProductsPage;