import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemCount from './ItemCount/ItemCount';
import Image from './SM-placeholder.png'
import './Item.css'
import { CardActionArea, CardActions } from '@mui/material';

export default function Item({stock, initial, title, description, price, onAdd}) {
  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={Image}
          alt="placeholder image"
        />
        <CardContent className='content'>
          <Typography gutterBottom variant="h5" component="div">
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
      <CardActions>
        <ItemCount initial={initial} stock={stock} onAdd={onAdd}/>
      </CardActions>
    </Card>
  );
}