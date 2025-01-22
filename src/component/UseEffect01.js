import React, { useEffect, useState } from "react";

function UseEffect01() {
  const [tarefas, setTarefas] = useState([

  'Aprendendo Hooks',
  'Aprendendo UseEffect',
  'Aprendendo javascript'
]);

  const [input, setInput] = useState("");

  //utilizando useEffect

  useEffect(()=> {
    localStorage.setItem('tarefas',JSON.stringify(tarefas));
  }, [tarefas]);

  function Adicionar() {
    setTarefas([...tarefas, input]);
    setInput("");
  }

  return (
    <div>
      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
      <strong>{tarefas.lengthas}</strong>

      <input type="text" onChange={(e) => setInput(e.target.value)}></input>
      <button onClick={Adicionar}>Adicionar</button>
    </div>
  );
}

export default UseEffect01;
