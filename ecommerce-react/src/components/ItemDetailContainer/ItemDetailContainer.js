import './ItemDetailContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail'
import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react'

function ItemListDetails({products, onAdd}){
    // genero el setItem
    const [item, setItem] = useState()

    // genero la función getItem
    const getItem = () => {
        return new Promise((resolve) => {
            setTimeout( () => {
                return resolve(<ItemDetail 
                    title={products[3].title}
                    price={products[3].price}
                    author={products[3].author}
                    description={products[3].longDescription}
                    stock={products[3].stock}
                    prodImg={products[3].img}
                    onAdd={onAdd}/>)
            }, 2000);
            
        })
    }

    // configuro el useEffect para ejecutarse en el ciclo de montaje y actualizar el estado de setItem
    useEffect( () => {
        getItem().then( (item) => {
            setItem(item)
        })
    }, [])
    
    return(
        <Container maxWidth="xl">
            {item}
        </Container>
    );
}

export default ItemListDetails