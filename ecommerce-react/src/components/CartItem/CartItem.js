import { Container } from "@mui/material";
import "./CartItem.css"

function CartItem({producto}) {

    // devuelvo a float el precio
    let price = parseFloat(producto.price.replace("$","").replace(",",""))
    console.log(price)

    // multiplico precio por cantidad para tener el total
    const totalPrice = price * producto.qty;

    return (
    <Container maxWidth="sm">
        <div className="div-container-cartitem">
            <h1>{producto.title}</h1>
            {/* <img src={producto.itemImg} alt="productimage" className="cart-item-image"/> */}
            <div className="div-data">
                <p>Autor: {producto.author}</p>
                <p>Cantidad: {producto.qty}</p>
                <p>Total: ${totalPrice} (c/u ${price})</p>
            </div>
            
        </div>
        <br />
    </Container>
    );
  }
  
  export default CartItem;