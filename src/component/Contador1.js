import React,{useState} from "react";

function Contador1(){

    const[contador, setContador] = useState(0);

 return(
      <div>
            <p>Imprimindo contador</p>
            <button onClick={() => setContador(contador + 1)}>Aumentar</button>
        </div>
 )

}

export default Contador1
