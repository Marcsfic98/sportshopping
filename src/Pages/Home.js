
import Main from "../componentes/Main";
import Cards from "../componentes/Cards";
import Depoiments from "../componentes/Depoiments";
import BoxEmail from "../componentes/BoxEmail";
import SidebarCart from "../componentes/SidebarCart";
import ProductList from "../componentes/ProductList";

function Home({products, SetshowSidebarCart,showSidebarCart,addProductCart,selectedProduct}) {


  return (
  
     <div className="home">
      
      <Main/>
      <SidebarCart selectedProduct={selectedProduct} SetshowSidebarCart={ SetshowSidebarCart}  showSidebarCart={ showSidebarCart}/>
      <Cards />
      <ProductList products={products} addProductCart={addProductCart}/>
      <Depoiments/>
      <BoxEmail/>
     
    </div>
   
  );
}

export default Home;