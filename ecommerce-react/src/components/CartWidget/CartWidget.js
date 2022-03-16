import React from 'react'
import Button from '@mui/material/Button'
import { ShoppingCart } from '@mui/icons-material';
import './CartWidget.css'

function CartWidget({cantProd = 0}){
    return(
        <Button startIcon={<ShoppingCart/>} variant='contained' >{cantProd}</Button>
    );
}

export default CartWidget