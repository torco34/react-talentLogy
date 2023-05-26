import { CountryData } from "./CountryData";
import dataLibro from "./dataLibro";
export const Ejercicio14 = () => {
  return (
    <div className="containerh2">
      <h2>Ejercicio 14</h2>
      <p>
        Crear un componente que muestre una lista de países y al seleccionar uno
        de ellos, muestre información detallada sobre su cultura, historia,
        idioma y lugares turísticos
      </p>
      <CountryData dataLibro={dataLibro} />
    </div>
  );
};
