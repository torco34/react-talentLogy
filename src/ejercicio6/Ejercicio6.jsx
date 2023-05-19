import { BotonEvent } from "./BotonEvent";

export const Ejercicio6 = () => {
  return (
    <div>
      <div className="pt-4">
        <h2>Ejercicio 6</h2>
        <p className="">
          Crear un componente que muestre un botón y al hacer clic en él, cambie
          el estado del componente y muestre un mensaje.
        </p>
        <div className=" pt-3">
          <h5>Resultado:</h5>
          <BotonEvent />
        </div>
      </div>
    </div>
  );
};
