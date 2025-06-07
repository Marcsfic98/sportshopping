
import Product from "../Product";
import "./style.css"


function ProductList({products,addProductCart}) {
  return (
        <div className="container-p">
            {products.map(product => <Product key={product.id} {...product} addProductCart={addProductCart}/>)}
           
        </div>
  );
}

export default ProductList;