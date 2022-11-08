import Navbar from "./components/navBar/Navbar";
import ItemListContainer from "./components/Productos/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CartView from "./components/CartView/CartView";
import Checkout from "./components/Checkout/Checkout";
import Footer from "./components/Footer/Footer"



import {BrowserRouter, Routes, Route} from "react-router-dom";
import CartContextProvider from "./context/cartContext";



function App() {
  return (

      <CartContextProvider>
    <BrowserRouter>
       <Navbar />
      <Routes>
        <Route path="/"
         element={<ItemListContainer/>
  } />
        <Route path="/category/:cat" element={<ItemListContainer />}/>
        <Route path="/producto/:id" element={<ItemDetailContainer /> } />
        <Route path="/cart" element={<CartView />  } />
        <Route path="/checkout/:orderid" element= {<Checkout/> } />
        <Route path="*" element={<h1>Página no encontrada</h1>}/>
      </Routes>
      <Footer />
      </BrowserRouter>
      </CartContextProvider>
    
  )
}

export default App;
