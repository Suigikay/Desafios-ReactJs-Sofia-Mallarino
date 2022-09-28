import "./App.css";
import Navbar from "./components/navBar/Navbar";
// import ItemListContainer from "./components/Productos/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";


function App() {
  return (
    <div>
      <Navbar />
      {/* <ItemListContainer />    */}
      <ItemDetailContainer />
    </div>
  );
}

export default App;
