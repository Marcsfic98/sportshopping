import { Link } from "react-router-dom";
import { BrowserRouter as Router ,Routes ,Route } from "react-router-dom";
function Navbar() {
  return (
    <div className="nav">
     <h1 className="logo">SPORT<span>SHOPPING</span></h1>
     <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Produtos">Produtos</Link></li>
            <li><Link to="/sobre">Sobre</Link></li>
            <li><Link to="/contato">Contato</Link></li>
            <li><Link to="/conta">Conta</Link></li>
        </ul>
     </nav>

     <div className="search-input-container">
        <input type="search"></input>
     </div>
    </div>
  );
}

export default Navbar;
