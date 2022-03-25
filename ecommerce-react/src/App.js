import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div>
      <NavBar inCart={0}/>
      <ItemListContainer title={'¡Nuevos productos!'}/>
    </div>
  );
}

export default App;