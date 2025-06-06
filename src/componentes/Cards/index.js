import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.css';
import { faCar, faCircleCheck, faCreditCard, faLock } from '@fortawesome/free-solid-svg-icons';

function Cards( props ) {
    
  return (
    <div className='container'>
        <div className="cards">
        <div className="box-icon">
            <i><FontAwesomeIcon icon={faCar} /></i>
        </div>
        <div className="info">
            <h2>Frete gratis</h2>
            <p>Para todo Brasil</p>
        </div>
    </div>

    <div className="cards">
        <div className="box-icon">
            <i><FontAwesomeIcon icon={faCreditCard} /></i>
        </div>
        <div className="info">
            <h2>Desconto no pix</h2>
            <p>Parcelamos em ate 12X</p>
        </div>
    </div>

    <div className="cards">
        <div className="box-icon">
            <i><FontAwesomeIcon icon={faLock} /></i>
        </div>
        <div className="info">
            <h2>Site</h2>
            <p>100% Seguro e confiavel</p>
        </div>
    </div>

    <div className="cards">
        <div className="box-icon">
            <i><FontAwesomeIcon icon={faCircleCheck} /></i>
        </div>
        <div className="info">
            <h2>Garantia</h2>
            <p>Satisfaçao ou Reembolso</p>
        </div>
    </div>

    <div className='page'>Produtos</div>
    <div className='line'></div>
    </div>
  );
}

export default Cards;
