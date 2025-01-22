import React from "react";
import { Link } from "react-router-dom";

function Home(){

    return(
        <div>
        <h2>Bem vindo pagina inicial</h2>
        <span>Meu conteúdo:</span> <br></br>
        <Link to="/sobre">Sobre</Link><br></br>
        <Link to="/cliente">Cliente</Link><br></br>
        <Link to="/contato">Contato</Link>
        </div>
    )
}

export default Home;