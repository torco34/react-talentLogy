import { CountryData } from "./CountryData";

export const Ejercicio14 = () => {
  const dataLibro = [
    {
      name: "Colombia",
      culture:
        "La cultura de Colombia es el resultado de la mezcla de europeos o blancos, en especial aquellos llegados de España",
      history:
        "	La historia de Colombia hace referencia a los procesos que han marcado el devenir histórico de la actual ",
      touristSpots: "Cartagena, Santa Marta, Eje Cafetero",
    },
    {
      name: "País 2",
      culture: "Información sobre la cultura del país 2.",
      history: "Información sobre la historia del país 2.",
      language: "Idioma del país 2.",
      touristSpots: "Lugares turísticos del país 2.",
    },
  ];
  return (
    <div>
      <CountryData dataLibro={dataLibro} />
    </div>
  );
};
