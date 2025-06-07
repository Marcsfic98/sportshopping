import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.css'
import { faLocation, faLocationArrow, faLocationCrosshairs, faLocationPin, faLocationPinLock } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


function FormPag() {
 
  return (
        <div className="form-conteiner">
          <div className='box-form'>
            <h2><FontAwesomeIcon icon={faLocationPin}/> Endereço de entrega</h2>
            <input className='block' placeholder='Estado' type='text'></input>
            <input className='block' placeholder='Cidade' type='text'></input>
            <input className='block' placeholder='Rua' type='text'></input>
            <input className='block' placeholder='numero' type='text'></input>
          </div>

          <div className='box-form justify'>
             <span>CPF</span>
             <input placeholder='ex:999.888.777-66' type='text'></input>
          </div>

          <div className='box-form justify'>
             <span>Cupon de desconto</span>
             <input placeholder='ex:Azqfw' type='text'></input>
          </div>

          <div className='box-form justify'>
             <h3>Metodo de pagamento</h3>
             <ul>
              <li>Pix</li>
              <li>Cartão</li>
              <li>Boleto</li>
             </ul>

             <div className='box-pix'>
               <div className='qrcode'>
               
               </div>
               <div className='total-price'>
                    <p>Total dos produtos<b>R$151</b> </p>
                    <p>Total do Frete    <b>R$0,00</b> </p>
                    <p>Pagamento Total<b>R$151</b> </p>
                    <br/>
                    <br/>
                    
                    <button>Copiar QRcode</button>
               </div>
             </div>
          </div>
        </div>
  );
}

export default FormPag;