
import { BrowserRouter as Router , Route ,Routes } from "react-router-dom";
import './App.css';
import Home from "./Pages/Home";
import Navbar from "./componentes/Navbar";
import Footer from "./componentes/Footer";
import { useEffect, useState } from "react";


function App() {

  const [products , setProducts] = useState([]);
  const [showSidebarCart , SetshowSidebarCart] = useState(false);
  const [selectedProduct , SetselectedProduct] = useState([]);
  const [cartTotal , setCartTotal] = useState(0);

  useEffect(() =>
    {
      fetch("/db.json").then(res => res.json())
      .then((data) => setProducts(data.product));
  }, [])

  const addProductCart = (id) => {
    const productAdd = products.filter((products)=> products.id === id)[0];

   if(selectedProduct.includes(productAdd))return;
   SetselectedProduct(selectedProduct.concat(productAdd))
   setCartTotal(cartTotal+productAdd.price)
  }
  
    
  return (
   <Router>
      <Navbar selectedProduct={selectedProduct}  SetshowSidebarCart={ SetshowSidebarCart}/>
      <main>
        <Routes>
          <Route path="/" element={<Home products={products} selectedProduct={selectedProduct}  SetshowSidebarCart={ SetshowSidebarCart}  showSidebarCart={ showSidebarCart} addProductCart={addProductCart}/>}/>
        </Routes>
      </main>
      <Footer/>
   </Router>
  );
}

export default App;
