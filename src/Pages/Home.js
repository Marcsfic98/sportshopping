
import Main from "../componentes/Main";
import Cards from "../componentes/Cards";
import Depoiments from "../componentes/Depoiments";
import BoxEmail from "../componentes/BoxEmail";
import SidebarCart from "../componentes/SidebarCart";
import ProductList from "../componentes/ProductList";

function Home({products}) {


  return (
  
     <div className="home">
      
      <Main/>
      <SidebarCart/>
      <Cards />
      <ProductList products={products}/>
      <Depoiments/>
      <BoxEmail/>
     
    </div>
   
  );
}

export default Home;