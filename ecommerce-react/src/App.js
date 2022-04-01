import './App.css';
import React from 'react'
// router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// components
import NavBar from './components/NavBar/NavBar';

// pages
import HomePage from './pages/Home';
import ProductsPage from './pages/Products';
import NotFoundPage from './pages/NotFound';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar inCart={0}/>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/productos' element={<ProductsPage />}/>
          <Route path='*' element={<NotFoundPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;