import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.css';
import { faLocationPin } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import SidebarProduct from '../SidebarProduct';

function FormPag({cartTotal,removeProductCart,addToCartTotal ,selectedProduct}) {
  const [isCvcFocused, setIsCvcFocused] = useState(false);
  const [nameCard, setNameCard] = useState('');
  const [cvcCard, setCvcCard] = useState('');
  const [numCard, setNumCard] = useState('');
  const [validadCard, setValidadeCard] = useState('');
  const [rua , setRua] = useState( '');
  const [numeroRua , setNumeroRua] = useState( '');
  const [estado , setEstado] = useState( '');
  const [cidade , setCidade] = useState( '');
  

  // New state to track the active payment method
  const [activePaymentMethod, setActivePaymentMethod] = useState('card'); // 'card' by default

  const nameCardTransform = nameCard.toUpperCase();
  const cartTotalFormat = cartTotal.toFixed(2).replace(".", ",")

  return (
    <div className="form-conteiner">

      <div className='box-form'>
         {selectedProduct.map(product => <SidebarProduct key={product.id} cartTotal={cartTotal} {...product} removeProductCart={removeProductCart} addToCartTotal={addToCartTotal} />)}
         <div className='total-price'>
          <br/>
          <br/>
              <p>Total dos produtos<b>R$ {cartTotalFormat}</b> </p>
    
            </div>
      </div>
      <div className='box-form'>
        <h2><FontAwesomeIcon icon={faLocationPin}/> Endereço de entrega</h2>
        <input onChange={(e)=> setEstado(e.target.value.toUpperCase())} placeholder='Estado' type='text'></input>
        <input onChange={(e)=> setCidade(e.target.value.toUpperCase())} placeholder='Cidade' type='text'></input>
        <input onChange={(e)=> setRua(e.target.value.toUpperCase())} placeholder='Rua' type='text'></input>
        <input onChange={(e)=> setNumeroRua(e.target.value)} placeholder='numero' type='text'></input>

        <h3 className={`${(rua.length > 0 && numeroRua.length > 0 && estado.length > 0 && cidade.length>0)&& 'block'}`}>{rua},{numeroRua}-{cidade}-{estado} </h3>
      </div>

      <div className='box-form justify'>
        <span>CPF</span>
        <input placeholder='ex:999.888.777-66' type='text'></input>
      </div>

      <div className='box-form justify'>
        <span>Cupom de desconto</span>
        <input placeholder='ex:Azqfw' type='text'></input>
      </div>

      <div className='box-form justify'>
        <h3>Método de pagamento</h3>
        <ul>
          {/* Add onClick handlers and dynamic className for 'selected' */}
          <li
            id='card'
            className={activePaymentMethod === 'card' ? 'selected' : ''}
            onClick={() => setActivePaymentMethod('card')}
          >
            Cartão
          </li>
          <li
            id='pix'
            className={activePaymentMethod === 'pix' ? 'selected' : ''}
            onClick={() => setActivePaymentMethod('pix')}
          >
            Pix
          </li>
          <li
            id='boleto'
            className={activePaymentMethod === 'boleto' ? 'selected' : ''}
            onClick={() => setActivePaymentMethod('boleto')}
          >
            Boleto
          </li>
        </ul>

        {/* Conditional rendering for Box Pix */}
        {activePaymentMethod === 'pix' && (
          <div className='box-pix'>
            <div className='qrcode'></div>
            <div className='total-price'>
              <p>Total dos produtos<b>R$ {cartTotalFormat} </b> </p>
              <p>Total do Frete <b>R$0,00</b> </p>
              <p>Pagamento Total<b>R$ {cartTotalFormat}</b> </p>
              <br/>
              <br/>
              <button>Copiar código QR</button>
            </div>
          </div>
        )}

        {/* Conditional rendering for Box Card */}
        {activePaymentMethod === 'card' && (
          <div className='box-card'>
            <div className='container-card'>
              <div className={`flip-card-inner ${isCvcFocused ? 'flipped' : ''}`}>
                <div className={`card ${(nameCard.length > 0 || validadCard.length > 0 || numCard.length > 0) && "card-selected"}`}>
                  <div className='chip'></div>
                  <div className='master'></div>
                  <p className='w100'>{nameCardTransform}</p>
                  <p>{numCard} <b>{validadCard}</b></p>
                </div>

                <div className={`card-cvc ${ cvcCard.length > 0 && "card-selected"}`}>
                  <div className='line-card'></div>
                  <p>CVC {cvcCard}</p>
                </div>
              </div>

              <input onChange={(e)=>setNameCard(e.target.value)} placeholder='Nome do titular' type='text'></input>
              <input onChange={(e)=>setNumCard(e.target.value)} placeholder='Numero do Cartão' type='text'></input>
              <input onChange={(e)=>setValidadeCard(e.target.value)} placeholder='Vencimento' type='text'></input>
              <input
                onChange={(e)=>setCvcCard(e.target.value)}
                placeholder='cvc'
                type='text'
                onFocus={() => setIsCvcFocused(true)}
                onBlur={() => setIsCvcFocused(false)}
              ></input>
            </div>
            <div className='total-price'>
              <p>Total dos produtos<b>R$ {cartTotalFormat}</b> </p>
              <p>Total do Frete <b>R$0,00</b> </p>
              <p>Pagamento Total<b>R$ {cartTotalFormat}</b> </p>
              <br/>
              <br/>
              <button>Pagar</button>
            </div>
          </div>
        )}

        
        {activePaymentMethod === 'boleto' && (
          <div className='box-pix'>

            <div className='boleto'></div>
            <div className='total-price'>
              <p>Total dos produtos<b>R$ {cartTotalFormat} </b> </p>
              <p>Total do Frete <b>R$0,00</b> </p>
              <p>Pagamento Total<b>R$ {cartTotalFormat}</b> </p>
              <br/>
              <br/>
              <button>Copiar Código de Barras</button>
            </div>
            
            
          </div>
        )}

      </div>
    </div>
  );
}

export default FormPag;