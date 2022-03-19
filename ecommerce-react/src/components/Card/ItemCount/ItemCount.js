import React from 'react'
import Button from '@mui/material/Button'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './ItemCount.css'


function ItemCount({stock, initial, onAdd}){
    return(
        <>
            <div className='box'>
                <Button>-</Button>
                <p>{initial}</p>
                <Button>+</Button>
            </div>
            <Button className='btn-cart' endIcon={<AddShoppingCartIcon/>}>Agregar a carrito</Button>
        </>
    );
}

export default ItemCount