import React from 'react'
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './CartWidget.css'
import { useState, useContext } from 'react';
import { CartContext } from '../../../context/CartContext';
import { Link } from 'react-router-dom';

function CartWidget({inCart = 0}){
    const { cartProducts } = useContext(CartContext)
    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
          right: -3,
          top: 11,
          border: `2px solid ${theme.palette.background.paper}`,
          padding: '0 4px',
        },
    }));

    // calcular total de productos en carrito
    const countCartItems = (cartProducts) =>{
        let count = 0
        cartProducts.forEach(element => {
            count = count + element.qty;
        });
        return count
    }

    const cartItemQty = countCartItems(cartProducts);
    
    return(
        <Link to={'/cart'}>
            <IconButton aria-label='cart'>
                <StyledBadge badgeContent={cartItemQty} color="primary">
                    <ShoppingCartIcon className='cart-btn'/>
                </StyledBadge>
            </IconButton>
        </Link>
    );
}

export default CartWidget