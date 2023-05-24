import { Filter } from "./Filter";

export const Ejercicio15 = () => {
  const news = [
    {
      id: 1,
      date: "2023-05-20",
      category: "Política",
      title: "Noticia 1",
      content: "Contenido de la noticia 1...",
    },
    {
      id: 2,
      date: "2023-05-21",
      category: "Deportes",
      title: "Noticia 2",
      content: "Contenido de la noticia 2...",
    },
    {
      id: 3,
      date: "2023-05-22",
      category: "Entretenimiento",
      title: "Noticia 3",
      content: "Contenido de la noticia 3...",
    },
  ];

  return (
    <div>
      <Filter news={news} />
    </div>
  );
};
