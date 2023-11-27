import React from 'react';

function Input({ tasks, setTasks }) {
  const handleAdd = (e) => {
    e.preventDefault();
    //Instancia de Form Data
    // const dataFromInput = new FormData(e.target);
    // const text = dataFromInput.get("inputTask");
    const newTask = {
      id: crypto.randomUUID(),
      title: e.target.inputTask.value,
      isCompleted: false
    };
    setTasks([
      ...tasks,
      newTask
    ]);

  };
  return (
    <form onSubmit={handleAdd}>
      <label htmlFor='inputTask'>Agregar tarea: </label>
      <input type="text" id='inputTask' name="inputTask" placeholder='comprar pan...' aria-label='agregar tarea' />
      <input type="submit" value="Agregar" />
    </form>

  );
}
export default Input;