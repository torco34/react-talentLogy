import { NumberSumar } from "./NumberSumar";

export const Ejercicio4 = () => {
  let number = [1, 2, 3, 4, 5];
  return (
    <div>
      <div className="pt-4">
        <h2>Ejercicio 4</h2>
        <p className="">
          Crear un componente que reciba como propiedad un arreglo de números y
          muestre la suma de sus valores.
        </p>
        <div className="pt-3">
          <h5>Resultado de : {number}</h5>
          <NumberSumar number={number} />
        </div>
      </div>
    </div>
  );
};
