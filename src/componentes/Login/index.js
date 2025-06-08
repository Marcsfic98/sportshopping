import "./style.css"

function Login (){
    return(
        <div className="container-login">
            <div className="box-login">
                <h3>Possui Conta ?</h3>

                <input type="text" placeholder="Email"/>
                <input type="text" placeholder="senha"/>

                <a href="/">Entrar</a>

                <h3>Ainda Nao Possui Conta ?</h3>
                <a href="/cadastro">Cadastre-se</a>
            </div>
        </div>
    )
}

export default Login;