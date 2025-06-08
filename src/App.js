
import { BrowserRouter as Router , Route ,Routes } from "react-router-dom";
import './App.css';
import Home from "./Pages/Home";
import Navbar from "./componentes/Navbar";
import Footer from "./componentes/Footer";
import { useEffect, useState } from "react";
import SidebarCart from "./componentes/SidebarCart";
import Check from "./Pages/Check";
import Sobre from "./Pages/Sobre";
import Contact from "./Pages/Contact";
import Account from "./Pages/Account";







function App() {

  const [products , setProducts] = useState([]);
  const [showSidebarCart , SetshowSidebarCart] = useState(false);
  const [selectedProduct , SetselectedProduct] = useState([]);
  const [cartTotal , setCartTotal] = useState(0);
  const [find , setFind] = useState('')
 
  
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

  const removeProductCart = (id) => {
      const newSelectedProduct = selectedProduct.filter((products) => products.id !== id);
      SetselectedProduct(newSelectedProduct);
  }
  
  const addToCartTotal = (value) => setCartTotal(cartTotal + value);

  const lowerCaseFind = find.toLowerCase();

  const productName = products.map((products) => products.name);
  const productNameList = productName.filter((name) => {
  return name && typeof name === 'string' && name.toLowerCase().includes(lowerCaseFind);
});
  

  return (
   <Router>
    <div className="App">
         <Navbar setFind={setFind}  selectedProduct={selectedProduct}  SetshowSidebarCart={ SetshowSidebarCart}/>
      <SidebarCart addToCartTotal={addToCartTotal} removeProductCart={removeProductCart} cartTotal={cartTotal} selectedProduct={selectedProduct} SetshowSidebarCart={ SetshowSidebarCart}  showSidebarCart={ showSidebarCart}/>
      <main>
        <Routes>
          <Route path="/" element={<Home productNameList={productNameList} addToCartTotal={addToCartTotal} removeProductCart={removeProductCart} cartTotal={cartTotal} products={products} selectedProduct={selectedProduct}  SetshowSidebarCart={ SetshowSidebarCart}  showSidebarCart={ showSidebarCart} addProductCart={addProductCart}/>}/>
          <Route path="/cart/checkout"  element={<Check selectedProduct={selectedProduct}  cartTotal={cartTotal} removeProductCart={removeProductCart} addToCartTotal={addToCartTotal} />}/>
          <Route path="/sobre" element={<Sobre/>}/>
          <Route path="/contato" element={<Contact/>}/>
          <Route path="/conta" element={<Account/>}/>
        </Routes>

      </main>
      <Footer/>
    </div>
     
   </Router>
  );
}

export default App;
