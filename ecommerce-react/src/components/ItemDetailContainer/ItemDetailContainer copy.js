import './ItemDetailContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail'
import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react'
import mockProducts from '../../mockProducts';

function ItemDetailContainer({products, id, onAdd}){
    // genero el setItem
    const [itemDetail, setItemDetail] = useState()

    // obtener product según id
    const getProductById = (productsArray, prodId) => {
        return productsArray.filter( (product) => {
            if(product.id === prodId){
                return product
            }
        })
    }

    // configuro el useEffect para ejecutarse en el ciclo de montaje y actualizar el estado de setItem
    useEffect( () => {
        getItemDetail(mockProducts, id).then( (item) => {
            setItemDetail(item)
        })
    }, [])
    
    // genero la función getItem
    const getItemDetail = (allProducts, id) => {
        const productDetail = getProductById(allProducts, id);
        return new Promise((resolve) => {
            setTimeout( () => {
                return resolve(<ItemDetail 
                    title={productDetail.title}
                    price={productDetail.price}
                    author={productDetail.author}
                    description={productDetail.longDescription}
                    stock={productDetail.stock}
                    prodImg={productDetail.img}
                    onAdd={onAdd}/>)
            }, 2000);
            
        })
    }
    
    return(
        <>
            <Container maxWidth="xl">
                {itemDetail}
            </Container>
        </>
    );
}

export default ItemDetailContainer