import { List } from "./List";
import "./index.css";
export const Ejercicio11 = () => {
  const users = [
    {
      id: 1,
      img: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Juli%C3%A1n_Rom%C3%A1n_in_2017_%282%29.jpg",
      name: "Julian Roman",
      email: "john@example.com",
    },
    {
      id: 2,
      img: "https://www.proimagenescolombia.com/photos/57291_1926_imagen__.png",
      name: "Jhon Alex Toro",
      email: "jhone@example.com",
    },
    {
      id: 3,
      img: "https://www.eltiempo.com/files/image_640_428/files/crop/uploads/2022/07/01/62bf57db86104.r_1656708540026.0-230-1418-939.jpeg",
      name: "Diana Hoyos",
      email: "diaob@example.com",
    },
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
