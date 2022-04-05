import './App.css';
import React, {useState, useEffect} from 'react'
// router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// components
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

// pages
import HomePage from './pages/Home/Home';
import ProductsAllPage from './pages/ProductsAll';
import ProductsDetailPage from './pages/ProductDetail'
import NotFoundPage from './pages/NotFound';
import ContactPage from './pages/Contact';

// data
import mockProducts from './mockProducts'


function App() {

  // genero el setProducts
  const [products, setProducts] = useState([])

  // genero la función getProducts
  const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout( () => {
            return resolve(mockProducts)
        }, 2000);
        
    })
  }

  // configuro el useEffect para ejecutarse en el ciclo de montaje y actualizar el estado de setProducts con el valor del mock
  useEffect( () => {
      getProducts().then( (allProducts) => {
          setProducts(allProducts)
      })
  }, [])
  
  return (
    <div>
      {console.log("Productos app:" , products)}
      <BrowserRouter>
        <NavBar inCart={0}/>
        <Routes>
          <Route path='/' element={<HomePage products={products}/>}/>
          <Route path='/category/productos' element={<ProductsAllPage products={products}/>}/>
          <Route path='/category/productos/:id' element={<ProductsDetailPage products={products}/>}/>
          <Route path='/category/contacto' element={<ContactPage />}/>
          <Route path='*' element={<NotFoundPage />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;