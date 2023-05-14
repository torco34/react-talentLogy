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
      <h2>Segundo Ejercicio</h2>
      <UserInform user={user} />
    </div>
  );
};
