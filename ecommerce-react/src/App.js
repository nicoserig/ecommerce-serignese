import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import HomePage from './pages/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar inCart={0}/>
        <Routes>
          <Route path='/' element={<h2>Home Page!</h2>}/>
          <Route path='/productos' element={<HomePage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;