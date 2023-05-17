import React from "react";
import { ProductTabla } from "./ProductTabla";

export const Ejercicio5 = () => {
  const products = [
    { nombre: "Producto 1", precio: 10 },
    { nombre: "Producto 2", precio: 20 },
    { nombre: "Producto 3", precio: 30 },
  ];
  return (
    <div>
      <div className="pt-4">
        <h2>Ejercicio 5</h2>
        <p className="">
          Crear un componente que reciba como propiedad un arreglo de objetos
          con información de productos y renderice una tabla con los nombres y
          precios de cada producto.
        </p>
        <div className="border pt-3">
          <h5>Resultado:</h5>
          <ProductTabla products={products} />
        </div>
      </div>
    </div>
  );
};
