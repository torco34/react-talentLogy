import { CarruselImge } from "./CarruselImge";
export const Ejercicio10 = () => {
  return (
    <div>
      <div className="pt-4">
        <h2>Ejercicio 10</h2>
        <p className="">
          Crear un componente que reciba como propiedad una lista de imágenes y
          muestre un carrusel para navegar entre ellas.
        </p>
        <div className="border pt-3">
          <h5>Resultado:</h5>
          <CarruselImge />
        </div>
      </div>
    </div>
  );
};
