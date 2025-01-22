
import { Link } from "react-router-dom";
function Cliente(){

 return(
    <div>
        <h1>Cliente Honda</h1>
        <p>Contato:(11)9999-8888</p>
        <p>Endereço:Rua paulo de franquis n°450</p>
        <Link to="/home">Home</Link><br></br>
        <Link to="/sobre">Sobre</Link>
    
    </div>
 )
}

export default Cliente;