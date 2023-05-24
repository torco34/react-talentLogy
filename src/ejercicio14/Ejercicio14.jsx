import { CountryData } from "./CountryData";
import dataLibro from "./dataLibro";
export const Ejercicio14 = () => {
  return (
    <div>
      <h5>Ejercicio 14</h5>
      <p>
        Crear un componente que muestre una lista de países y al seleccionar uno
        de ellos, muestre información detallada sobre su cultura, historia,
        idioma y lugares turísticos
      </p>
      <CountryData dataLibro={dataLibro} />
    </div>
  );
};
