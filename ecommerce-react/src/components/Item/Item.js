import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemCount from './ItemCount/ItemCount';
import Image from './SM-placeholder.png'
import './Item.css'
import { CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';

export default function Item({id, stock, initial, title, author, description, price, itemImg = Image, onAdd}) {
  
  const { addProduct } = useContext(CartContext)

  const data = {id, stock, initial, title, author, description, price, itemImg}

  return (
    
    <Card className='cardItem'>
      <Link to={'/category/productos/'+id}>
        <CardActionArea>
          <CardMedia
            className='img'
            component="img"
            image={itemImg}
            alt="placeholder image"
          />
          <CardContent className='content'>
            <Typography gutterBottom variant="body1" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
            <Typography variant="h5" color="green" className='price-lbl'>
              {price}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions>
        <ItemCount initial={initial} stock={stock} product={data} onAdd={addProduct}/>
      </CardActions>
    </Card>
    
  );
}