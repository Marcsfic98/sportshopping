
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.css';
import { faCcAmazonPay, faCcAmex, faCcApplePay, faCcMastercard, faCcPaypal, faCcVisa, faPix } from '@fortawesome/free-brands-svg-icons';


function Footer( ) {

  return (
    <div className='footer'>
      <div className='card'>
          <p>Meios de pagamento :</p>
        <FontAwesomeIcon icon={faCcVisa}/>
        <FontAwesomeIcon icon={faCcMastercard}/>
        <FontAwesomeIcon icon={faCcAmazonPay}/>
        <FontAwesomeIcon icon={faCcAmex}/>
        <FontAwesomeIcon icon={faCcApplePay}/>
        <FontAwesomeIcon icon={faCcPaypal}/>
        <FontAwesomeIcon icon={faPix}/>
      </div>

      <div className='selo'>

      </div>


      <span>Marcos Ribeiro - 2025. Todos os direitos reservados.©</span>
    </div>
  );
}

export default Footer;
