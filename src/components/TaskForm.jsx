import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Para utilizar el contexto, se debe importar el contexto y utilizar el hook useContext. El hook useContext recibe como argumento el nombre contexto que se quiere utilizar. 
  const {createTask} = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({ title, description });
  };

  return (
    <div className="max-w-md mx-auto">
      <form className="bg-slate-800 p-10 mb-4" onSubmit={handleSubmit}>
      <h1 className="text-2xl font-bold text-white mb-4">Agregar tarea</h1>
      <input
        onChange={(e) => setTitle(e.target.value)}
        autoFocus
        placeholder="Escriba el titulo de la tarea"
        className="bg-slate-300 p-3 w-full rounded-md mb-2"
      />
      <textarea
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Escriba la descripcion"
        className="bg-slate-300 p-3 w-full rounded-md mb-2"
      ></textarea>
      <button className="bg-indigo-500 px-3 py-1 text-white rounded-sm hover:bg-indigo-400">Agregar</button>
    </form>
    </div>
  );
}

export default TaskForm;
