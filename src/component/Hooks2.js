import React, { useState } from "react";

function Hooks2() {
  const [tarefas, SetTarefas] = useState([
    "Apredendo Hooks",
    "Aprendend NodeJs",
    "Apredendo Javascript",
  ]);

  const [input, setInput] = useState("");

  function handleAdd() {
    SetTarefas([...tarefas, input]);
  }

  return (
    <div>
      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
      <input
        text="type"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <button type="submit" onClick={handleAdd}>
        Adicionar
      </button>
    </div>
  );
}

export default Hooks2;
