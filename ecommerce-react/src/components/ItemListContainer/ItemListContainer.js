import React, {useState, useEffect, useRef} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import MuiCard from '../Card/Card';
import './ItemListContainer.css'

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Keyboard, Navigation, EffectCoverflow, Pagination } from "swiper";

function ItemListContainer({title}){
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
    },
    {
        title: 'Producto 6',
        description: 'Descripción del producto 6',
        price: 800,
        stock: 2
    },]
    
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
        <>
            <div className='back'>
            <h2 className='title'>{title}</h2>
            <Swiper effect={"coverflow"} grabCursor={true} loop={true} centeredSlides={true} initialSlide={3} slidesPerView={5} keyboard={{enabled:true}} navigation={true} coverflowEffect={{rotate: 25, stretch: 0, depth: 100, modifier: 1, slideShadows: true}}  modules={[EffectCoverflow, Pagination, Navigation, Keyboard]} className="mySwiper">
                {products.map( (product) => {
                    // convierto el precio a string con formato moneda USD
                    let price = product.price.toLocaleString('en-US', {style: 'currency', currency:'USD'});
                    return(
                        // se crea el Card y se le pasan todas las props basados en el mock
                        <SwiperSlide>
                            <MuiCard title={product.title} description={product.description} stock={product.stock} price={price} onAdd={onAddFx}/>
                        </SwiperSlide>
                    )
                })}
            </Swiper>                    
            </div>
        </>
    );
}

export default ItemListContainer