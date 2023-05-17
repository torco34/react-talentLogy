import { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    name: "",
    description: "",
    dueDate: "",
  });
  const [editIndex, setEditIndex] = useState(-1);

  // Manejar el cambio en los campos del formulario
  const handleChange = (e) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };

  // Agregar una nueva tarea a la lista
  const addTask = (e) => {
    e.preventDefault();
    setTasks([...tasks, newTask]);
    setNewTask({ name: "", description: "", dueDate: "" });
  };

  // Editar una tarea existente en la lista
  const editTask = (index) => {
    setNewTask(tasks[index]);
    setEditIndex(index);
  };

  // Actualizar una tarea editada en la lista
  const updateTask = (e) => {
    e.preventDefault();
    const updatedTasks = [...tasks];
    updatedTasks[editIndex] = newTask;
    setTasks(updatedTasks);
    setNewTask({ name: "", description: "", dueDate: "" });
    setEditIndex(-1);
  };

  // Eliminar una tarea de la lista
  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Lista de Tareas Pendientes</h1>

      <form onSubmit={editIndex === -1 ? addTask : updateTask}>
        <input
          type="text"
          name="name"
          placeholder="Nombre de la tarea"
          value={newTask.name}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Descripción de la tarea"
          value={newTask.description}
          onChange={handleChange}
          required
        ></textarea>
        <input
          type="date"
          name="dueDate"
          value={newTask.dueDate}
          onChange={handleChange}
          required
        />
        <input
          type="submit"
          value={editIndex === -1 ? "Agregar tarea" : "Actualizar tarea"}
        />
      </form>

      <h2>Tareas Pendientes</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <strong>{task.name}</strong>
            <br />
            {task.description}
            <br />
            <em>Fecha de vencimiento: {task.dueDate}</em>
            <br />
            <button onClick={() => editTask(index)}>Editar</button>
            <button onClick={() => deleteTask(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;