
import { BrowserRouter as Router , Route ,Routes } from "react-router-dom";
import './App.css';
import Home from "./Pages/Home";
import Navbar from "./componentes/Navbar";
import Footer from "./componentes/Footer";
import { useEffect, useState } from "react";


function App() {

  const [products , setProducts] = useState([]);

  useEffect(() =>
    {
      fetch("/db.json").then(res => res.json())
      .then((data) => setProducts(data.product));
  }, [])
  
    
  return (
   <Router>
      <Navbar/>
      <Home products={products} />
      <Footer/>
   </Router>
  );
}

export default App;
