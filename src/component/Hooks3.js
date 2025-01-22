import React, { useState } from "react";

function Hooks3() {
  const [tarefas, setTarefa] = useState([
    "Apredendo Hook",
    "Apredendo React",
    "Apredendo Javascript",
  ]);

  const [input, setInput] = useState("");

  function adicionar() {
    setTarefa([...tarefas, input]);
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
      <button onClick={adicionar}>Adicionar</button>
    </div>
  );
}
export default Hooks3;
