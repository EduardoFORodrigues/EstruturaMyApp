import React, { useState } from "react";

function Hooks1() {
  const [tarefas, setTarefas] = useState([
    "Apredendo React",
    "Apredendo Nodejs",
    "apredendo Javascript",
  ]);

  const [input, setInput] = useState("");

  function adicionar() {
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

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <button type="button" onClick={adicionar}>
        Adicionar
      </button>
    </div>
  );
}

export default Hooks1;
