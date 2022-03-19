import React from 'react'
import './ItemListContainer.css'

function ItemListContainer({greeting}){
    return(
        <div className='div'>
            <p>{greeting}</p>
        </div>
    );
}

export default ItemListContainer