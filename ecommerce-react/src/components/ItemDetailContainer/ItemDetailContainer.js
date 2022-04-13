import './ItemDetailContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail'
import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react'
import mockProducts from '../../mockProducts';

function ItemDetailContainer({products, id, onAdd}){
    // genero el setItem
    const [productDetail, setProductDetail] = useState({})

    // obtener product según id
    const filterProductById = (array, id) => {
        return array.filter( (product) => {
            if(product.id == id){
                return setProductDetail(product)
            }
        })
    }

    // configuro el useEffect para ejecutarse en el ciclo de montaje y actualizar el estado de setItem
    useEffect( () => {
        filterProductById(mockProducts, id)
    }, [])
    
    return(
        <>
            {console.log(productDetail)}
            <Container maxWidth="xl">
                <ItemDetail
                        id={productDetail.id}
                        initial={1} 
                        title={productDetail.title}
                        price={productDetail.price}
                        author={productDetail.author}
                        description={productDetail.longDescription}
                        stock={productDetail.stock}
                        prodImg={'/../'+productDetail.img}
                        onAdd={onAdd}/>
            </Container>
        </>
    );
}

export default ItemDetailContainer