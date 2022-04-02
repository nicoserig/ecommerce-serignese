import React from 'react'
import './HomePage.css'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';

function HomePage({products}){
  return(
      <>
        <div className='back-home'>
            <div className='div-home'>
                <p>¡Bienvenid@!</p>
            </div>
        </div>
        <ItemListContainer title={'This is a test'} allProducts={products}/>
      </>
  );
}

export default HomePage;