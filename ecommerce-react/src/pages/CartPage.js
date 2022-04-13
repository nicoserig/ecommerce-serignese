import { Container } from "@mui/material";
import "./CartPage.css"
import CartItem from "../components/CartItem/CartItem";
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function CartPage() {
    const { cartProducts } = useContext(CartContext)
    
    return (
    <Container maxWidth="sm">
        <div className="main-div-container-cartpage">
            <h1>Carrito</h1>
            {cartProducts.map( (product) => {
                
                return (<CartItem producto={product}/>)
            })
            }
        </div>
    </Container>
    );
  }
  
  export default CartPage;