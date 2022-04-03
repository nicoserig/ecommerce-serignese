import './ItemDetailContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail'
import { Container } from '@mui/material';

function ItemListDetails({products, onAdd}){
    
    
    return(
        <Container maxWidth="xl">
            <ItemDetail 
                title={products[3].title}
                price={products[3].price}
                author={products[3].author}
                description={products[3].longDescription}
                stock={products[3].stock}
                prodImg={products[3].img}
                onAdd={onAdd}/>
        </Container>
    );
}

export default ItemListDetails