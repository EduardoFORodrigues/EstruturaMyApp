import React, { useState } from "react";

function Hooks() {
  const [tarefas, setTarefas] = useState([
    "Apredento react",
    "Apredendo nodejs",
  ]);

  const [input, setinput] = useState("");

  function Adicionar() {
    setTarefas([...tarefas, input]);
    setinput("");
  }

  return (
    <div>
      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>

      <input
        type="text"
        value={input}
        onChange={(e) => setinput(e.target.value)}
      ></input>

      <button type="button" onClick={Adicionar}>
        Adicionar
      </button>
    </div>
  );
}

export default Hooks;
