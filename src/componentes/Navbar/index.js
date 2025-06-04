import { faBars, faSearch, faShoppingBag, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import './style.css';
import { BrowserRouter as Router ,Routes ,Route } from "react-router-dom";
function Navbar() {
  return (
    <div className="nav">
     <div className="inner-content">
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

     <div className="navs-icons-container">
        <div className="search-input-container">
            <input placeholder="Procurar" type="search"></input>
            <button><FontAwesomeIcon icon={faSearch} /></button>
         </div>
         <button className="shopping-cart">
            <FontAwesomeIcon icon={faShoppingCart}/>
            <div className="products-count">0</div>
         </button>

         <button className="menu-buttom">
            <FontAwesomeIcon icon={faBars}/>
        </button>
     </div>
     </div>
    </div>
  );
}

export default Navbar;
