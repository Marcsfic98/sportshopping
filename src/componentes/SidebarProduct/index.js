import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function SidebarProduct() {
  return (
    <div className="sidebar-product">
        <div className="left-side">
             <button className="remove-product-btn">
                <FontAwesomeIcon icon={faXmark}/>
             </button>

             <div className="details">
                <h4>Camisa Brasil</h4>
                <p>R$195</p>
                <input type="number"  min={1} max={100}/>
                <p className="price-sum">
                    <b>Soma: </b> R$3500
                </p>
             </div>
        </div>

        <div className="right-side">
            <img src="/images/produtos/brasil.jpg" alt="camisa de time"/>
        </div>
    </div>
  );
}

export default SidebarProduct;