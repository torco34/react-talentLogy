import React from "react";
import { ProductTabla } from "./ProductTabla";

export const Ejercicio5 = () => {
  const products = [
    { nombre: " Leche entera   :", precio: 4500 },
    { nombre: "Arroz kilo      :", precio: 4000 },
    { nombre: "Sal      : ", precio: 3000 },
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
        <div className=" pt-2">
          <h5>Resultado:</h5>
          <ProductTabla products={products} />
        </div>
      </div>
    </div>
  );
};
