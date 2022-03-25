import React, {useState, useEffect} from 'react'
import ItemCount from '../Item/ItemCount/ItemCount'
import './ItemListDetails.css'

function ItemListDetails({title, apiProducts}){
    
    // genero el setProducts
    const [products, setProducts] = useState([])

    // genero la función getProducts
    const getProducts = () => {
        return new Promise((resolve, reject) => {
            return resolve(apiProducts)
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
        <div class="container">
            <div class="cover"></div>
                <div class="content">
                    <div class="content-body">
                        <div class="black-label">
                            <span class="title"><b>Audi TT 2022 RX</b></span>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            Tenetur corporis modi aliquam, quis laborum a nam fugit ducimus? 
                            Molestiae repellendus adipisci ea aut eligendi nemo velit itaque,
                            illum placeat? Velit.</p>
                            <div className='itemCount'>
                                <ItemCount/>
                            </div>      
                        </div>
                    </div>            
                </div>
            </div>
    );
}

export default ItemListDetails