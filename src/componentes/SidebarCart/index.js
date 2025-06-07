import { faMoneyBill, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SidebarProduct from "../SidebarProduct";
import { Link } from "react-router-dom";
import "./style.css";



function SidebarCart({SetshowSidebarCart,showSidebarCart,selectedProduct}) {

  return (
        <aside className={`sidebar-cart ${showSidebarCart && "show"}`}>
          <div className="top">
            <h3>Seu Carrinho</h3>
            <button onClick={()=> SetshowSidebarCart(false)}>
              <FontAwesomeIcon icon={faXmark}/>
            </button>
          </div>

          <div className="sidebar-products-list">
            {selectedProduct.map(product => <SidebarProduct key={product.id} {...product}/>)}
              
          </div>

          <div className="total-container">
            <b>Total : </b> R$250
          </div>

          <Link to='/cart/checkout' className="btn-icon">
            <span>Pagar agora</span>
            <FontAwesomeIcon icon={faMoneyBill}/>
          </Link>

          <p>Seu carrinho está vazio</p>

        </aside>
  
  );
}

export default SidebarCart;