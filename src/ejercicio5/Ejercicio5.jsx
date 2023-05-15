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
      {" "}
      <h1>Tabla de productos</h1>
      <ProductTabla products={products} />
    </div>
  );
};
