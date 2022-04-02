import React from 'react'
import Button from '@mui/material/Button'
import { ShoppingCart } from '@mui/icons-material';
import './CartWidget.css'

function CartWidget({inCart = 0}){
    return(
        <Button startIcon={<ShoppingCart/>} variant='contained'>{inCart}</Button>
    );
}

export default CartWidget