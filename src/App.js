import Navbar from "./componentes/Navbar";
import { BrowserRouter as Router , Route ,Routes } from "react-router-dom";
import './App.css';
import Main from "./componentes/Main";

function App() {
  return (
   <Router>
     <div className="App">
      <Navbar/>
      <Main/>
    </div>
   </Router>
  );
}

export default App;
