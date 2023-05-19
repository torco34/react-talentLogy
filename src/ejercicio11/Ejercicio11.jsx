import { List } from "./List";
import "./index.css";
export const Ejercicio11 = () => {
  const users = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com" },
  ];
  return (
    <div>
      <div className=" pt-4">
        <h2>Ejercicio 11</h2>
        <p className="">
          Crear un componente que reciba como propiedad una lista de imágenes y
          muestre un carrusel para navegar entre ellas.
        </p>
        <div className=" name border pt-3">
          <h5>Resultado:</h5>
          <List users={users} />
        </div>
      </div>
    </div>
  );
};
