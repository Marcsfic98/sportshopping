import "./style.css";

function Product ({id,image,name,price,addProductCart}) {

    const sun = Number(price) + 20 ;
    const division =Number(sun) / 12; 
    const divisionFormat = division.toFixed(2).replace(".", ",");
    const sunFormat = sun.toFixed(2).replace(".", ",");
    const priceFormat = price.toFixed(2).replace(".", ",")

    return(
        
              <div className="product-container">
                <div className="img-product fla">
                    <img src={image} alt="camisa de time"></img>
                </div>
                <div className="info-product">
                    <p>{name}</p>
                    <p className="rate">&#9733; &#9733; &#9733; &#9733; &#9733;</p>
                    <h2><b>R${priceFormat}</b> no pix</h2>
                    <h3>R${sunFormat}</h3>
                    <p>12x de R${divisionFormat}</p>
                    <button onClick={() => addProductCart()}>Comprar</button>
                </div>
            </div>

       
    )
}

export default Product;