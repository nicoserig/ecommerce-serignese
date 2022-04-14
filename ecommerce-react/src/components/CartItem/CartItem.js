import { Container } from "@mui/material";
import { Button } from "@mui/material";
import "./CartItem.css";
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

function CartItem({producto}) {

    const { deleteProduct } = useContext(CartContext)

    // multiplico precio por cantidad para tener el total
    var price = 0;
    var priceTag = 0;
    var prodImg = null;

    // arreglar problema con imágenes
    if(producto.prodImg){
        prodImg = producto.prodImg;
    }else{
        prodImg = producto.itemImg;
    }

    // obtener el precio en numero en todos los casos
    if(!isNaN(producto.price)){
        price = producto.price;
    }else{
        price = producto.price.replace("$","").replace(",","")
    }

    const totalPrice = price * producto.qty;

    // mostrar de forma diferente cuando es una cantidad > 1
    if(producto.qty === 1){
        priceTag = "Total: $" + totalPrice;
    }else{
        priceTag = "Total: $" + totalPrice + " (c/u $" + price + ")";
    }

    return (
    <Container maxWidth="sm">
        {console.log(producto)}
        <div className="div-container-cartitem">
            <img src={prodImg} alt="productimage" className="cart-item-image"/>
            <div className="div-text">
                <h1>{producto.title}</h1>
                
                <div className="div-data">
                    <p>Autor: {producto.author}</p>
                    <p>Cantidad: {producto.qty}</p>
                    <p className="total-price-tag">{priceTag}</p>
                    <Button variant="contained" sx={{
                        color:"white",
                        backgroundColor: "rgb(50, 50, 50)",
                        marginLeft: "23px"}
                        } onClick={() => { deleteProduct(producto); }}>Eliminar de carrito</Button>
                </div>
                
            </div>
        </div>
        <br />
    </Container>
    );
  }
  
  export default CartItem;