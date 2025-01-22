import React, { useCallback, useEffect, useMemo, useState } from "react";

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



  //Usemeno 

  const totaltarefas = useMemo(()=> tarefas.length, [tarefas]

  )

  ///useCallback precisa retorna uma funcão
  const teste = useCallback(()=> {
    setTarefas([...tarefas, input]);
    setInput('');

  },[input,tarefas]);
 

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
     <strong>Quantidade de tarefas:{totaltarefas}</strong><br></br>
      <input type="text" onChange={(e) => setInput(e.target.value)}></input>
      <button onClick={Adicionar}>Adicionar</button>
    </div>
  );
}

export default UseEffect01;
