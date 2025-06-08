import FormPag from "../componentes/FormPag";



function Check ({cartTotal,removeProductCart,addToCartTotal,selectedProduct}) {

  return (
  
     <div >
       <FormPag    cartTotal={cartTotal} removeProductCart={removeProductCart} addToCartTotal={addToCartTotal} selectedProduct={selectedProduct}/>
    </div>
   
  );
}

export default Check;