
import Main from "../componentes/Main";
import Cards from "../componentes/Cards";
import Depoiments from "../componentes/Depoiments";
import BoxEmail from "../componentes/BoxEmail";
import ProductList from "../componentes/ProductList";

function Home({products, addProductCart,productNameList}) {

  return (
  
     <div className="home">
      
      <Main/>
      <Cards text="Produtos " />
      <ProductList productNameList={productNameList} products={products} {...products} addProductCart={addProductCart}/>
      <Depoiments/>
      <BoxEmail/>
     
    </div>
   
  );
}

export default Home;