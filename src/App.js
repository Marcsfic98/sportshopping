import Navbar from "./componentes/Navbar";
import { BrowserRouter as Router , Route ,Routes } from "react-router-dom";
import './App.css';
import Main from "./componentes/Main";
import Cards from "./componentes/Cards";
import Product from "./componentes/Product";
import Depoiments from "./componentes/Depoiments";

function App() {
  return (
   <Router>
     <div className="App">
      <Navbar/>
      <Main/>
      <Cards />
      <Product/>
      <Depoiments/>
    </div>
   </Router>
  );
}

export default App;
