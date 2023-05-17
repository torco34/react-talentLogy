import { Filter } from "./Filter";

export const Ejercicio15 = () => {
  const newsList = [
    { title: "Noticias del dia" },
    { Data: "Este es un texto de almohadilla" },
    { category: "Este es un texto de almohadilla" },
    { content: "Este contenidos de  la pagina" },
  ];
  return (
    <div>
      <Filter newsList={newsList} />
    </div>
  );
};
