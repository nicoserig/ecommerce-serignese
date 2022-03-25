import React, {useState, useEffect} from 'react'
import MuiCard from '../Card/Card';
import './ItemListContainer.css'

function ItemListContainer(){
    // creo mock de productos
    const mockProducts = [{
        title: 'Producto 1',
        description: 'Descripción del producto 1',
        price: 20000.9999,
        stock: 10
    },
    {
        title: 'Producto 2',
        description: 'Descripción del producto 2',
        price: 2500,
        stock: 18
    },
    {
        title: 'Producto 3',
        description: 'Descripción del producto 3',
        price: 300,
        stock: 5
    },
    {
        title: 'Producto 4',
        description: 'Descripción del producto 4',
        price: 800,
        stock: 2
    },
    {
        title: 'Producto 5',
        description: 'Descripción del producto 5',
        price: 330.5,
        stock: 100
    }]
    
    // genero el setProducts
    const [products, setProducts] = useState([])

    // genero la función getProducts
    const getProducts = () => {
        return new Promise((resolve, reject) => {
            return resolve(mockProducts)
        })
    }

    // configuro el useEffect para ejecutarse en el ciclo de montaje y actualizar el estado de setProducts con el valor del mock
    useEffect( () => {
        getProducts().then( (products) => {
            setProducts(products)
        })
    }, [])

    const onAddFx = () => {
        alert("Add to cart - Placeholder")
    }
    return(
        <div className='back'>
            {/* Se agregan cards con prop de stock */}
            {products.map( (product) => {
                
                let price = product.price.toLocaleString('en-US', {style: 'currency', currency:'USD'});
                return(
                    <MuiCard title={product.title} description={product.description} stock={product.stock} price={price} onAdd={onAddFx}/>
                )
            })}                    
        </div>
    );
}

export default ItemListContainer