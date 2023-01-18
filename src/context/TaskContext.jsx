import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

// El contexto es un objeto que se puede utilizar para pasar datos a través del árbol de componentes sin tener que pasar props manualmente en cada nivel.
// Se define el nombre del contexto y se exporta para poder utilizarlo en otros componentes.
export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask(task) {
    // Una copia del tasks y agregarle la nueva tarea
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  }

  // Para eliminar un elemento de un arreglo en React, es necesario crear una copia del arreglo y filtrar los elementos que no queremos eliminar. No se puede modificar el arreglo original.
  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }
  // Provider es el componente
  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        deleteTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
