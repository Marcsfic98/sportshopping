import { useState } from 'react';

import './style.css';
import { faLocationPin } from '@fortawesome/free-solid-svg-icons';
import SidebarProduct from '../SidebarProduct';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function FormPag({ cartTotal, removeProductCart, addToCartTotal, selectedProduct }) {
  const [isCvcFocused, setIsCvcFocused] = useState(false);
  const [nameCard, setNameCard] = useState('');
  const [cvcCard, setCvcCard] = useState('');
  const [numCard, setNumCard] = useState('');
  const [validadCard, setValidadeCard] = useState('');
  const [rua, setRua] = useState('');
  const [numeroRua, setNumeroRua] = useState('');
  const [estado, setEstado] = useState('');
  const [cidade, setCidade] = useState('');

 
  const [cpf, setCpf] = useState('');
  const [cpfError, setCpfError] = useState('');

 
  const [nameCardError, setNameCardError] = useState('');
  const [numCardError, setNumCardError] = useState('');
  const [validadCardError, setValidadeCardError] = useState('');
  const [cvcCardError, setCvcCardError] = useState('');

  const [activePaymentMethod, setActivePaymentMethod] = useState('card');

  const nameCardTransform = nameCard.toUpperCase();
  const cartTotalFormat = cartTotal.toFixed(2).replace(".", ",");



  const validateCpf = (cpf) => {
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
      return false;
    }
    let sum = 0;
    let remainder;
    for (let i = 1; i <= 9; i++) {
      sum = sum + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }
    remainder = (sum * 10) % 11;
    if ((remainder === 10) || (remainder === 11)) {
      remainder = 0;
    }
    if (remainder !== parseInt(cpf.substring(9, 10))) {
      return false;
    }
    sum = 0;
    for (let i = 1; i <= 10; i++) {
      sum = sum + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }
    remainder = (sum * 10) % 11;
    if ((remainder === 10) || (remainder === 11)) {
      remainder = 0;
    }
    if (remainder !== parseInt(cpf.substring(10, 11))) {
      return false;
    }
    return true;
  };

  const validateCardNumber = (cardNumber) => {
    cardNumber = cardNumber.replace(/\s/g, '').replace(/-/g, '');
    if (cardNumber.length < 13 || cardNumber.length > 19) {
      return false;
    }

    let sum = 0;
    let double = false;

    for (let i = cardNumber.length - 1; i >= 0; i--) {
      let digit = parseInt(cardNumber.charAt(i), 10);

      if (double) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }
      sum += digit;
      double = !double;
    }
    return (sum % 10) === 0;
  };

  const validateExpiryDate = (expiryDate) => {
    const parts = expiryDate.split('/');
    if (parts.length !== 2) return false;

    const month = parseInt(parts[0], 10);
    const year = parseInt(parts[1], 10);

    if (month < 1 || month > 12) return false;

    const currentYear = new Date().getFullYear() % 100;
    const currentMonth = new Date().getMonth() + 1;

    if (year < currentYear) return false;
    if (year === currentYear && month < currentMonth) return false;

    return true;
  };

  const validateCvc = (cvc) => {
    return /^\d{3,4}$/.test(cvc);
  };

  const isCardFormValid =
    nameCard.length > 0 && !nameCardError &&
    numCard.length > 0 && !numCardError &&
    validadCard.length > 0 && !validadCardError &&
    cvcCard.length > 0 && !cvcCardError;


  return (
    <div className="form-conteiner">

      <div className='box-form'>
        {selectedProduct.map(product => <SidebarProduct key={product.id} cartTotal={cartTotal} {...product} removeProductCart={removeProductCart} addToCartTotal={addToCartTotal} />)}
        <div className='total-price'>
          <br />
          <br />
          <p>Total dos produtos<b>R$ {cartTotalFormat}</b> </p>

        </div>
      </div>
      <div className='box-form'>
        <h2><FontAwesomeIcon icon={faLocationPin} /> Endereço de entrega</h2>
        <input onChange={(e) => setEstado(e.target.value.toUpperCase())} placeholder='Estado' type='text'></input>
        <input onChange={(e) => setCidade(e.target.value.toUpperCase())} placeholder='Cidade' type='text'></input>
        <input onChange={(e) => setRua(e.target.value.toUpperCase())} placeholder='Rua' type='text'></input>
        <input onChange={(e) => setNumeroRua(e.target.value)} placeholder='numero' type='text'></input>

        <h3 className={`${(rua.length > 0 && numeroRua.length > 0 && estado.length > 0 && cidade.length > 0) && 'block'}`}>{rua},{numeroRua}-{cidade}-{estado} </h3>
      </div>

      <div className='box-form justify'>
        <span>CPF</span>
        {cpfError && <p style={{ color: 'red', fontSize: '0.8rem' }}>{cpfError}</p>}
        <input
          placeholder='ex:999.888.777-66'
          type='text'
          value={cpf}
          onChange={(e) => {
            let value = e.target.value.replace(/\D/g, ''); 
            
            
            if (value.length > 9) {
              value = value.replace(/(\d{3})(\d)/, '$1.$2');
              value = value.replace(/(\d{3})(\d)/, '$1.$2');
              value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
            } else if (value.length > 6) {
              value = value.replace(/(\d{3})(\d)/, '$1.$2');
              value = value.replace(/(\d{3})(\d{1,2})$/, '$1.$2');
            } else if (value.length > 3) {
              value = value.replace(/(\d{3})(\d)/, '$1.$2');
            }
            
            setCpf(value);


            if (value.replace(/[^\d]+/g, '').length === 11) {
              if (!validateCpf(value)) {
                setCpfError('CPF inválido.');
              } else {
                setCpfError('');
              }
            } else {
              setCpfError('');
            }
          }}
          onBlur={() => { 
            if (cpf.replace(/[^\d]+/g, '').length > 0 && !validateCpf(cpf)) {
              setCpfError('CPF inválido.');
            }
          }}
          maxLength={14} 
        ></input>
        
      </div>

      <div className='box-form justify'>
        <span>Cupom de desconto</span>
        <input placeholder='ex:Azqfw' type='text'></input>
      </div>

      <div className='box-form justify'>
        <h3>Método de pagamento</h3>
        <ul>

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


        {activePaymentMethod === 'pix' && (
          <div className='box-pix'>
            <div className='qrcode'></div>
            <div className='total-price'>
              <p>Total dos produtos<b>R$ {cartTotalFormat} </b> </p>
              <p>Total do Frete <b>R$0,00</b> </p>
              <p>Pagamento Total<b>R$ {cartTotalFormat}</b> </p>
              <br />
              <br />
              <button>Copiar código QR</button>
            </div>
          </div>
        )}


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

                <div className={`card-cvc ${cvcCard.length > 0 && "card-selected"}`}>
                  <div className='line-card'></div>
                  <p>CVC {cvcCard}</p>
                </div>
              </div>

              <input 
                onChange={(e) => {
                  setNameCard(e.target.value);
                  if (e.target.value.trim().length < 3 && e.target.value.trim().length > 0) {
                    setNameCardError('Nome muito curto.');
                  } else {
                    setNameCardError('');
                  }
                }}
                onBlur={() => {
                  if (nameCard.trim().length > 0 && nameCard.trim().length < 3) {
                    setNameCardError('Nome muito curto.');
                  }
                }}
                placeholder='Nome do titular'
                type='text'
                value={nameCard}
              ></input>
              {nameCardError && <p style={{ color: 'red', fontSize: '0.8rem' , position:"absolute",bottom:"-45px", left:"-45px"}}>{nameCardError}</p>}

              <input 
                onChange={(e) => {
                  let value = e.target.value.replace(/\s/g, ''); 
                  const formattedValue = value.replace(/(\d{4})(?=\d)/g, '$1 '); 
                  
                  setNumCard(formattedValue);

                  if (value.length >= 13 && !validateCardNumber(value)) {
                    setNumCardError('Número de cartão inválido.');
                  } else {
                    setNumCardError('');
                  }
                }}
                onBlur={() => {
                  if (numCard.replace(/\s/g, '').length > 0 && !validateCardNumber(numCard.replace(/\s/g, ''))) {
                    setNumCardError('Número de cartão inválido.');
                  }
                }}
                placeholder='Numero do Cartão'
                type='text'
                value={numCard}
                maxLength={19} 
              ></input>
              {numCardError && <p style={{ color: 'red', fontSize: '0.8rem' , position:"absolute",bottom:"-95px", left:"-80px"}}>{numCardError}</p>}

              <input
                onChange={(e) => {
                  const value = e.target.value;
                  
                  if (value.length === 2 && validadCard.length < 2) {
                    setValidadeCard(value + '/');
                  } else {
                    setValidadeCard(value);
                  }
                  if (value.length === 5 && !validateExpiryDate(value)) {
                    setValidadeCardError('Data de vencimento inválida (MM/AA).');
                  } else {
                    setValidadeCardError('');
                  }
                }}
                onBlur={() => {
                  if (validadCard.length > 0 && !validateExpiryDate(validadCard)) {
                    setValidadeCardError('Data de vencimento inválida (MM/AA).');
                  }
                }}
                placeholder='Vencimento (MM/AA)'
                type='text'
                maxLength={5} 
                value={validadCard}
              ></input>
              {validadCardError && <p style={{ color: 'red', fontSize: '0.8rem', position:"absolute",bottom:"-145px", left:"-140px" }}>{validadCardError}</p>}

              <input
                onChange={(e) => {
                  setCvcCard(e.target.value);
                  if (e.target.value.length >= 3 && !validateCvc(e.target.value)) {
                    setCvcCardError('CVC inválido.');
                  } else {
                    setCvcCardError('');
                  }
                }}
                placeholder='cvc'
                type='text'
                maxLength={4}
                onFocus={() => setIsCvcFocused(true)}
                onBlur={() => {
                  setIsCvcFocused(false);
                  if (cvcCard.length > 0 && !validateCvc(cvcCard)) {
                    setCvcCardError('CVC inválido.');
                  }
                }}
                value={cvcCard}
              ></input>
              {cvcCardError && <p style={{ color: 'red', fontSize: '0.8rem' , position:"absolute",bottom:"-200px", left:"-45px"}}>{cvcCardError}</p>}
            </div>
            <div className='total-price'>
              <p>Total dos produtos<b>R$ {cartTotalFormat}</b> </p>
              <p>Total do Frete <b>R$0,00</b> </p>
              <p>Pagamento Total<b>R$ {cartTotalFormat}</b> </p>
              <br />
              <br />
              <button disabled={!isCardFormValid}>Pagar</button>
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
              <br />
              <br />
              <button>Copiar Código de Barras</button>
            </div>


          </div>
        )}

      </div>
    </div>
  );
}

export default FormPag;