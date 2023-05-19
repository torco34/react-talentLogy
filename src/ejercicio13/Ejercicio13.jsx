import { Books } from "./Books";

export const Ejercicio13 = () => {
  const book = {
    title: "El Señor de los Anillos",
    author: "John Ronald Reuel Tolkien",
    genre: "Fiction",
  };
  return (
    <div className="pt-4">
      <h2>Ejercicio 13</h2>
      <p className="">
        Crear un componente que reciba como propiedad una lista de imágenes y
        muestre un carrusel para navegar entre ellas.
      </p>
      <Books book={book} />
    </div>
  );
};
