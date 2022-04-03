import ItemCount from '../Item/ItemCount/ItemCount'
import './ItemDetail.css'
import { Container } from '@mui/material';

function ItemListDetails({title, author, description, price, stock, prodImg, onAdd}){
    let prodPrice = price.toLocaleString('en-US', {style: 'currency', currency:'USD'});
    const getStock = (stock) => {
        if(stock === 1){
            return "(1 disponible)"
        } else {
            return "(" + String(stock) + " disponibles)"
        }
    }

    return(
        <Container maxWidth="xl" className='mui-container'>
            <div class="container-detail">
                    <div className='img-container-detail'>
                        <img src={prodImg} alt='foto' className='photo-detail'/>
                    </div>
                    <div class="content-detail">
                        <div class="content-body-detail">
                            <div class="black-label-detail">
                                <span class="title-detail"><b>{title}</b></span>
                                <p className='author-detail'>{author}</p>
                                <p>Sinopsis</p>
                                <p class='descrip-detail'>{description}</p>
                                <p className='price-detail'>{prodPrice}</p>
                                <p>{getStock(stock)}</p>
                                <div className='itemCount-detail'>
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