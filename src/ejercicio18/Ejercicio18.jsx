import React from "react";
import { Galeria } from "./Galeria";

export const Ejercicio18 = () => {
  return (
    <div>
      <div className="container containerh2">
        <h2>Ejercicio 18</h2>
        <p>
          Crear un componente que permita crear y editar una lista de tareas
          pendientes. Cada tarea debe tener un nombre, una descripción y una
          fecha de vencimiento
        </p>
      </div>
      <Galeria />
    </div>
  );
};
