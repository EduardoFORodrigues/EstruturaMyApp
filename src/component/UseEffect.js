import React, { useEffect, useState } from "react";

function UseEffect1() {
  const [tarefas, setTarefas] = useState([]);
    
    // "Aprendendo Hooks",
    //"Aprendendo UseEffect",
    //"Aprendendo javascript",


  const [input, setInput] = useState("");



  //utilizando useEffect

useEffect(() => {

    const tarefaStorage = localStorage.getItem('tarefa');

    if(tarefaStorage){
        setTarefas(JSON.parse(tarefaStorage))
    }


},[])



  useEffect(() => {
    localStorage.setItem('tarefa' ,JSON.stringify(tarefas))
  }, [tarefas]);

  function Adicionar() {
    setTarefas([...tarefas, input]);
    setInput("");
  }

  return (
    <div>
      <ul>
        {" "}
        {tarefas.map((tarefa) => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
      <strong>você tem {tarefas.length}tarefas!</strong>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <button onClick={Adicionar}>Adicionar</button>
    </div>
  );
}

export default UseEffect1;
