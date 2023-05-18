import { Counter } from "./Counter";

export const Ejercicio8 = () => {
  return (
    <div>
      <div className="pt-4">
        <h2>Ejercicio 8</h2>
        <p className="">
          Crear un componente que reciba como propiedad un número y muestre un
          contador que se incrementa en uno cada segundo.
        </p>
        <div className="border pt-3">
          <h5>Resultado:</h5>
          <Counter number={42} stop={true} />
        </div>
      </div>
    </div>
  );
};
