import React from 'react'
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './CartWidget.css'

function CartWidget({inCart = 0}){
    
    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
          right: -3,
          top: 11,
          border: `2px solid ${theme.palette.background.paper}`,
          padding: '0 4px',
        },
    }));
    
    return(
        <IconButton aria-label='cart'>
            <StyledBadge badgeContent={inCart} color="primary">
                <ShoppingCartIcon className='cart-btn'/>
            </StyledBadge>
        </IconButton>
    );
}

export default CartWidget