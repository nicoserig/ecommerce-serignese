import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import HomePage from './pages/Home';
import ProductsPage from './pages/Products';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar inCart={0}/>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/productos' element={<ProductsPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;