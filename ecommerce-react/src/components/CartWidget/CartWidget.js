import React from 'react'
import Button from '@mui/material/Button'
import { ShoppingCart } from '@mui/icons-material';

function CartWidget({cantProd = 0}){
    return(
        <Button startIcon={<ShoppingCart/>} variant='contained' className = {'cw'}>{cantProd}</Button>
    );
}

export default CartWidget