import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import MuiCard from './components/Card/Card';

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer/>
    </div>
  );
}

export default App;