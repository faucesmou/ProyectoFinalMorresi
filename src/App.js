
import './App.css';
import CollapsibleExample from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
    <div className="App">
      <header >
      <CollapsibleExample />
      </header>
      <ItemListContainer text= 'Hola a todos! bienvenidos!' />
      
    </div>


  );
}

export default App;
