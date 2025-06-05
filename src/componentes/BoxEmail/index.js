import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import'./style.css'
import { faInstagram, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';

function BoxEmail() {
  return (
    <>
    <div className='box'>
      <div className='container'>
        <h3>Quer oferta ?</h3>
        <p>Receba nossos Descontos! Cadastre-se agora.  </p>
        <input placeholder='Deixe seu Email...' type='email'></input>
        <button>Enviar</button>
      </div>
    </div>

    <div className='social'>
      <div className='logo'>
        <FontAwesomeIcon icon={faTiktok}/>
      </div>

      <div className='logo'>
        <FontAwesomeIcon icon={faYoutube}/>
      </div>

      <div className='logo'>
        <FontAwesomeIcon icon={faInstagram}/>
      </div>
    </div>
    </>
  );
}

export default BoxEmail;
