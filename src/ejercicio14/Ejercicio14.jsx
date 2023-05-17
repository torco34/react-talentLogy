import { CountryData } from "./CountryData";

export const Ejercicio14 = () => {
  const countriesData = [
    {
      name: "País 1",
      culture: "Información sobre la cultura del país 1.",
      history: "Información sobre la historia del país 1.",
      language: "Idioma del país 1.",
      touristSpots: "Lugares turísticos del país 1.",
    },
    {
      name: "País 2",
      culture: "Información sobre la cultura del país 2.",
      history: "Información sobre la historia del país 2.",
      language: "Idioma del país 2.",
      touristSpots: "Lugares turísticos del país 2.",
    },
    // Agrega más países con su información aquí
  ];
  return (
    <div>
      <CountryData countriesData={countriesData} />
    </div>
  );
};
