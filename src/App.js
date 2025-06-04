import Navbar from "./componentes/Navbar";
import { BrowserRouter as Router , Route ,Routes } from "react-router-dom";
import './App.css';
import Main from "./componentes/Main";
import Cards from "./componentes/Cards";

function App() {
  return (
   <Router>
     <div className="App">
      <Navbar/>
      <Main/>
      <Cards />
    </div>
   </Router>
  );
}

export default App;
