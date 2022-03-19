import React from 'react'
import MuiCard from '../Card/Card';
import './ItemListContainer.css'

function ItemListContainer(){
    return(
        <div className='back'>
            {/* Se agregan cards con prop de stock */}
            <MuiCard title={'Card1'} description={'Descripción'} stock={28}/>
            <MuiCard title={'Card2'} description={'Descripción'} stock={18}/>
            <MuiCard title={'Card3'} description={'Descripción'} stock={5}/>
            <MuiCard title={'Card4'} description={'Descripción'} stock={2}/>
                    
        </div>
    );
}

export default ItemListContainer