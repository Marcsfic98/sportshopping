import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function SidebarProduct({name, price , image}) {

  const priceFormat = price.toFixed(2).replace(".", ",")

  const [quantity, setQuantity] = useState(1);
  const [priceSun , setPriceSun] = useState(price)

   const priceSunFormat = priceSun.toFixed(2).replace(".", ",")

  console.log(priceSun)

  return (
    <div className="sidebar-product">
        <div className="left-side">
             <button className="remove-product-btn">
                <FontAwesomeIcon icon={faXmark}/>
             </button>

             <div className="details">
                <h4>{name}</h4>
                <p>R${priceFormat}</p>
                <input type="number" value={quantity}  onChange={(e)=> {setQuantity(e.target.value); setPriceSun(e.target.value * price)}} min={1} max={100}/>
                {priceSun > price && (
                   <p className="price-sum">
                    <b>Soma: </b> R${priceSunFormat}
                </p>
                )}
               
             </div>
        </div>

        <div className="right-side">
            <img src={image} alt={name}/>
        </div>
    </div>
  );
}

export default SidebarProduct;