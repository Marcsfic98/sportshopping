import Product from "../Product";
import "./style.css";

function ProductList({ products, addProductCart, productNameList }) {
  

  return (
    <div className="container-p">
      
      {products
        .filter(product => productNameList.includes(product.name))
        .map(product => (
          <Product
            products={products} 
            productNameList={productNameList} 
            key={product.id}
            {...product}
            addProductCart={addProductCart}
          />
        ))}
    </div>
  );
}

export default ProductList;