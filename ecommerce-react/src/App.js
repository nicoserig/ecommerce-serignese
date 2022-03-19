import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div>
      <NavBar inCart={0}/>
      <ItemListContainer/>
    </div>
  );
}

export default App;