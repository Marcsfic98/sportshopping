
import { BrowserRouter as Router , Route ,Routes } from "react-router-dom";
import './App.css';
import Home from "./Pages/Home";

function App() {
  return (
   <Router>
      <Home/>
   </Router>
  );
}

export default App;
