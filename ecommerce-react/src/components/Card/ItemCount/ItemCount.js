import React, {useState} from 'react'
import Button from '@mui/material/Button'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './ItemCount.css'


function ItemCount({stock=5, initial=0, onAdd}){
    const [count, setCount] = useState(initial);
    
    // permite sumar si el contador no supera stock disponible
    const addCount = () =>{
        if (count < stock){
            setCount(count + 1)
        }    
    }
    
    // permite restar si el contador es mayor a 0 
    const subCount = () =>{
        if (count > 0){
            setCount(count - 1)
        }
    }

    return(
        <div className='main-div'>
            <div className='box'>
                <Button onClick={(subCount)}>-</Button>
                <p>{count}</p>
                <Button onClick={(addCount)}>+</Button>
            </div>
            <Button className='btn-cart' startIcon={<AddShoppingCartIcon/>} variant={'contained'}>Agregar</Button>
        </div>
    );
}

export default ItemCount