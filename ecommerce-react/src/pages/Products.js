import React from 'react'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import ItemListDetails from '../components/ItemListDetails/ItemListDetails';

function ProductsPage({products}) {
  // creo mock de productos
  
  return (
    <div>
      {/* <ItemListContainer title={'¡Nuevos ingresos!'} allProducts={products}/> */}
      <ItemListDetails title={'El Imperio Final - Nacidos de la Bruma'} price={3149} description={'Durante mil años han caído cenizas del cielo. Durante mil años nada ha florecido. Durante mil años los skaa han sido esclavizados y viven en la miseria; sumidos en un miedo inevitable. Durante mil años el Lord Legislador ha reinado con poder absoluto; dominando gracias al terror; a sus poderes y a su inmortalidad; ayudado por «obligadores» e «inquisidores»; junto a la poderosa magia de la alomancia. Pero los nobles a menudo han tenido trato sexual con jóvenes skaa y; aunque la ley lo prohíbe; algunos de sus bastardos han sobrevivido y heredado los poderes alománticos: son los «nacidos de la bruma» (mistborn). Ahora; Kelsier; el «superviviente»; el único que ha logrado huir de los Pozos de Hathsin; ha encontrado a Vin; una pobre chica skaa con mucha suerte... Tal vez los dos; con el mejor equipo criminal jamás reunido; unidos a la rebelión que los skaa intentan desde hace mil años; logren cambiar el mundo y acabar con la atroz mano de hierro del Lord Legislador. Pero; ¿qué pasa si el héroe de la profecía falla? '} stock={10} prodImg={'books/book9.jpeg'}/>
    </div>
  );
}

export default ProductsPage;