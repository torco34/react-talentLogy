import React from "react";
import { UserInform } from "./UserInform";

export const Ejerct2 = () => {
  const user = {
    name: "Juan",
    age: 23,
    city: "Bogota",
  };
  return (
    <div>
      <div className="pt-4">
        <h2>Segundo Ejercicio</h2>
        <p className="">
          Crear un componente que reciba como propiedad un objeto con
          información de un usuario y muestre su nombre, edad y ciudad.
        </p>
      </div>
      <UserInform user={user} />
    </div>
  );
};
