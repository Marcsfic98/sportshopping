
import Product from "../Product";
import "./style.css"


function ProductList({products}) {
  return (
        <div className="container-p">
            {products.map(product => <Product key={product.id} {...product}/>)}
           
        </div>
  );
}

export default ProductList;