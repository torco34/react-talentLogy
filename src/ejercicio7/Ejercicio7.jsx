import { Countdown } from "./Countdown";

export const Ejercicio7 = () => {
  return (
    <div>
      <div className="pt-4">
        <h2>Ejercicio 7</h2>
        <p className="">
          Crear un componente que reciba como propiedad una fecha y muestre la
          cantidad de días que faltan para esa fecha.
        </p>
        <div className="border pt-3">
          <h5>Resultado:</h5>
          <Countdown fecha="12/08/2023" />
        </div>
      </div>
    </div>
  );
};
