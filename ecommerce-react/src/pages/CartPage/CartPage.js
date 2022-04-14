import { Container } from "@mui/material";
import "./CartPage.css";
import CartItem from "../../components/CartItem/CartItem";
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Button } from "@mui/material";
import { Link } from 'react-router-dom';

function CartPage() {
    const { cartProducts } = useContext(CartContext)

    const calculateTotalPrice = (products) => {
        let total = 0;
        let price = 0;
        products.map( (product) => {            
            // obtener el precio en numero en todos los casos
            if(!isNaN(product.price)){
                price = product.price;
            }else{
                price = product.price.replace("$","").replace(",","")
            }
            total = (price * product.qty) + total;
        })

        return total
    }

    return (
    <Container maxWidth="sm">
        <div className="main-div-container-cartpage">
            <h1>Carrito</h1>

            {cartProducts.length === 0 &&
                <div className="no-products-div">
                    <p className="no-products-label">No hay productos en el carrito</p>
                    
                        <Button variant="contained" sx={{
                            color:"white",
                            backgroundColor: "rgb(50, 50, 50)",
                            marginBottom: "20px"}
                            }><Link to={'/'}>Volver a home</Link></Button>
                    
                </div>
            }
            {cartProducts.map( (product) => {                
                return (<CartItem producto={product}/>)
            })
            }
            {cartProducts.length > 0 &&
            <>
                <p className="total-price-p">Precio total: ${calculateTotalPrice(cartProducts)}</p>
                <Button variant="contained" sx={{
                    color:"white",
                    backgroundColor: "rgb(50, 50, 50)",
                    marginBottom: "20px"}
                    }>Finalizar compra</Button>
            </>
            }
        </div>
    </Container>
    );
  }
  
  export default CartPage;