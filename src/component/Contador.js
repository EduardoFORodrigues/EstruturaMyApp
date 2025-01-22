import React,{useState} from "react";



function Contador(){


    const[contador, setContador] = useState(0)

    return(
        <div>
            <p>Adicionando valor{contador}</p>
            <button onClick={() => setContador(contador + 1)}>contador</button>
        </div>
    )
}

export default Contador

