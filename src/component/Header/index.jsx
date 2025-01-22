import { Link } from "react-router-dom";
import './style.css'

export default function Header(){

    return(
        <header>
            <h1>Sujeito Programador</h1>
            <div className="menu">

            <Link to="/">Home</Link>
            <Link to="/sobre">Sobre</Link>
            <Link to="/contato">Contato</Link>

            </div>
            
        </header>
    )
    
}

