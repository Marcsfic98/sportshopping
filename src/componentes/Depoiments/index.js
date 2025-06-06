
import './style.css';


function Depoiments( ) {

  return (
    <div className='container'>
         <div className='page'>Depoimentos</div>
        <div className='line_d'></div>

        <div className="cards_d">
        <div  className="box-icon marcos">
            <i></i>
        </div>
        <div className="info">
            <h2>Marcos Ribeiro</h2>
            <p>Otima qualidade !!!</p>
        </div>
    </div>

    <div className="cards_d">
        <div className="box-icon jose">
            <i></i>
        </div>
        <div className="info">
            <h2>José Dias</h2>
            <p>Entrega super rapida !</p>
        </div>
    </div>

    <div className="cards_d">
        <div className="box-icon neymar">
            <i></i>
        </div>
        <div className="info">
            <h2>Neymar jr</h2>
            <p>Melhor loja , com os melhores preços ! </p>
        </div>
    </div>

   
    </div>
  );
}

export default Depoiments;
