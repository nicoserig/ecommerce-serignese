import ItemCount from '../Item/ItemCount/ItemCount'
import './ItemListDetails.css'
import { Container } from '@mui/material';

function ItemListDetails({title, description, price, stock, prodImg, onAdd}){
    let prodPrice = price.toLocaleString('en-US', {style: 'currency', currency:'USD'});
    const getStock = (stock) => {
        if(stock === 1){
            return "(1 disponible)"
        } else {
            return "(" + String(stock) + " disponibles)"
        }
    }

    return(
        <Container maxWidth="xl">
            <div class="container">
                    <div className='img-container'>
                        <img src={prodImg} alt='foto' className='photo'/>
                    </div>
                    <div class="content">
                        <div class="content-body">
                            <div class="black-label">
                                <span class="title"><b>{title}</b></span>
                                <p class='descrip'>{description}</p>
                                <p className='price'>{prodPrice}</p>
                                <p>{getStock(stock)}</p>
                                <div className='itemCount'>
                                    <ItemCount stock={stock} onAdd={onAdd}/>
                                </div>      
                            </div>
                        </div>            
                    </div>
                </div>
            </Container>
    );
}

export default ItemListDetails