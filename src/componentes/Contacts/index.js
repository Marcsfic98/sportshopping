import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.css'
import { faEnvelope, faLocationPin} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function Contacts () {
    return(
    <div className="sobre">
            <p><FontAwesomeIcon icon={faEnvelope}/> SPORTSHOPPING_SHORE@HOTMAIL.COM</p>
            <p><FontAwesomeIcon icon={faWhatsapp}/> (81) 9 8373-7440</p>
            <p><FontAwesomeIcon icon={faLocationPin}/> Rua da Hora , 235 - Recife PE </p>
            <p><FontAwesomeIcon icon={faLocationPin}/> Av. Epitacio Pessoa , 4457 - João Pessoa PB </p>
        </div>
    )
}

export default Contacts;