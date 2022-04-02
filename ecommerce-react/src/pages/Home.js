import React from 'react'
import './HomePage.css'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';

function HomePage({products}){
  return(
      <>
        <div className='back-home'>
            <div className='div-home'>
                <p>La tienda #1 en ventas del país.</p>
            </div>
        </div>
        <ItemListContainer title={'Novedades del mes'} allProducts={products}/>
        <ItemListContainer title={'Los más vendidos'} allProducts={products}/>
      </>
  );
}

export default HomePage;