import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import ItemListDetails from '../components/ItemListDetails/ItemListDetails';

function HomePage() {
      // creo mock de productos
      const mockProducts = [{
        title: 'Producto 1',
        description: 'Descripción del producto 1',
        price: 20000.9999,
        stock: 10,
        img: 'audi1.webp'
    },
    {
        title: 'Producto 2',
        description: 'Descripción del producto 2',
        price: 2500,
        stock: 18,
        img: 'audi2.webp'
    },
    {
        title: 'Producto 3',
        description: 'Descripción del producto 3',
        price: 300,
        stock: 5,
        img: 'audi3.jpeg'
    },
    {
        title: 'Producto 4',
        description: 'Descripción del producto 4',
        price: 800,
        stock: 2,
        img: 'audi4.webp'
    },
    {
        title: 'Producto 5',
        description: 'Descripción del producto 5',
        price: 330.5,
        stock: 100,
        img: 'audi5.webp'
    },
    {
        title: 'Producto 6',
        description: 'Descripción del producto 6',
        price: 800,
        stock: 2,
        img: 'audi6.webp'
    },]
  return (
    <div>
      <ItemListContainer title={'¡Nuevos ingresos!'} apiProducts={mockProducts}/>
      <ItemListDetails title={'Audi A3 Sport 2023'} price={50000} description={"Último modelo, máximo confort."} stock={20} prodImg={'audi4.webp'}/>
    </div>
  );
}

export default HomePage;