import { UserInform } from "./UserInform";

export const Ejercicio2 = () => {
  const user = {
    name: "Juan",
    age: 23,
    city: "Bogota",
  };
  return (
    <div>
      <div className="pt-4">
        <h2>Ejercicio 2</h2>
        <p className="">
          Crear un componente que reciba como propiedad un objeto con
          información de un usuario y muestre su nombre, edad y ciudad.
        </p>
        <div className="border pt-3">
          <UserInform user={user} />
        </div>
      </div>
    </div>
  );
};
