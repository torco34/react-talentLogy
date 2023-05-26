import React from "react";
import { Peliculascomp } from "./Peliculascomp";

export const Ejercicio16 = () => {
  return (
    <div className="border">
      <div className="container containerh2">
        <h2>Ejercicio 16</h2>
        <p>
          Crear un componente que reciba como propiedad una lista de películas y
          muestre una lista con su título, descripción, imagen y calificación en
          estrellas. Al hacer clic en una película, debe mostrar su información
          detallada en una sección aparte.
        </p>
      </div>
      <Peliculascomp />
    </div>
  );
};
