import "./App.css";
import Navbar from "./components/navBar/Navbar";
 import ItemListContainer from "./components/Productos/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemDetail from "./components/ItemDetailContainer/ItemDetail";


import {BrowserRouter, Routes, Route, Link} from "react-router-dom";


function App() {
  return (
    
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={
        <ItemListContainer /> 
        } />
        <Route path="/category/:cat" element={<ItemListContainer />}/>
        <Route path="/producto/:id" element={<ItemDetailContainer /> } />
        <Route path="/producto/:cart" element={<ItemDetail />  } />
      </Routes>
      <Link to="/">Página principal</Link>
      </BrowserRouter>
    
  );
}

export default App;
