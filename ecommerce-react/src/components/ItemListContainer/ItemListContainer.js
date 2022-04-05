import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import Item from '../Item/Item';
import './ItemListContainer.css'

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Keyboard, Navigation, Pagination } from "swiper";

function ItemListContainer({title, allProducts}){
    const onAddFx = () => {
        alert("Add to cart - Placeholder")
    }
    return(
        <>
            <div className='back'>
                <h2 className='h2title'>{title}</h2>
                <Swiper effect={"coverflow"} grabCursor={true} loop={true} centeredSlides={true} initialSlide={3} slidesPerView={5} keyboard={{enabled:true}} navigation={false} modules={[Pagination, Navigation, Keyboard]} className="mySwiper">
                    {allProducts.map( (product) => {
                        // convierto el precio a string con formato moneda USD
                        let price = product.price.toLocaleString('en-US', {style: 'currency', currency:'USD'});
                        return(
                            // se crea el Card y se le pasan todas las props basados en el mock
                            <SwiperSlide>
                                <Item id={product.id} title={product.title} description={product.description} stock={product.stock} price={price} onAdd={onAddFx} itemImg={'../'+product.img}/>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>                    
            </div>
        </>
    );
}

export default ItemListContainer