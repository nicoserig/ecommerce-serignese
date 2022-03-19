import React from 'react'
import './ItemListContainer.css'

function ItemListContainer({greeting}){
    return(
        <div className='back'>
            <div className='div'>
                <p>{greeting}</p>
            </div>
        </div>
    );
}

export default ItemListContainer