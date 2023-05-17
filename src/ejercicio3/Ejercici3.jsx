import { Number } from "./Number";

export const Ejercici3 = () => {
  return (
    <div>
      <div className="pt-4">
        <h2>Ejercicio 3</h2>
        <p className="">
          Crear un componente que reciba como propiedad un número y renderice
          una lista de elementos HTML con tantos elementos como el número
          indicado
        </p>
        <div className="border pt-3">
          <h5>Resultado:</h5>
          <Number numbers={5} />
        </div>
      </div>
    </div>
  );
};
