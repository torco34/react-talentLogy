import React from "react";
import TodoList from "./TodoList";

export const Ejercicio17 = () => {
  return (
    <div>
      <div className="container containerh2">
        <h2>Ejercicio 17</h2>
        <p>
          Crear un componente que permita crear y editar una lista de tareas
          pendientes. Cada tarea debe tener un nombre, una descripción y una
          fecha de vencimiento
        </p>
      </div>
      <TodoList />
    </div>
  );
};
