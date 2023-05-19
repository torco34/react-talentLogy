import { ListFilter } from "./ListFilter";

export const Ejercicio9 = () => {
  let names = ["juan", "Luis", "Leonardo", "Jose", "Miguel", "Antonio"];
  return (
    <div>
      Ejercicio9
      <div className="pt-4">
        <h2>Ejercicio 9</h2>
        <p className="">
          Crear un componente que reciba como propiedad una lista de nombres y
          muestre un input para filtrar los nombres por letras.
        </p>
        <div className=" pt-3">
          <h5>Resultado:</h5>
          <ListFilter names={names} />
        </div>
      </div>
    </div>
  );
};
