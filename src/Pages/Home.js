import Navbar from "../componentes/Navbar";
import Main from "../componentes/Main";
import Cards from "../componentes/Cards";
import Product from "../componentes/Product";
import Depoiments from "../componentes/Depoiments";
import BoxEmail from "../componentes/BoxEmail";
import Footer from "../componentes/Footer";
import SidebarCart from "../componentes/SidebarCart";

function Home() {
  return (
  
     <div className="home">
      <Navbar/>
      <Main/>
      <SidebarCart/>
      <Cards />
      <Product/>
      <Depoiments/>
      <BoxEmail/>
      <Footer/>
    </div>
   
  );
}

export default Home;