import ItemCount from '../Item/ItemCount/ItemCount'
import './ItemListDetails.css'

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
        <div class="container">
            <div class="cover"></div>
                <img src={prodImg} alt='foto' className='photo'/>
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
    );
}

export default ItemListDetails