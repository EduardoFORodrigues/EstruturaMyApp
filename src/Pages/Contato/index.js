import React from "react"
import { Link } from "react-router-dom"

function Contato(){

    return(
        <div>
            <h1>Página contato</h1>
            <p>E-mail:dudacriativo@hotmail.com</p>  
            <p>Telefone:(11)9857-08925</p> 
            <Link to="/home">Home</Link><br></br>
            <Link to="/sobre">Sobre</Link><br></br>
            <Link to="/contato">Contato</Link><br></br>
        </div>
    )
}

export default Contato