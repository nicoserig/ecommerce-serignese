import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={"¡Hola! Los mejores productos, muy pronto."}/>
    </div>
  );
}

export default App;