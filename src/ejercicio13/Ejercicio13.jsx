import { useState } from "react";

import books from "./books";
import { Books } from "./Books";
// import { ProductBook } from "./ProductBook";
export const Ejercicio13 = () => {
  const [comments, setComments] = useState([]);

  const handleAddComment = (event) => {
    event.preventDefault();
    const comment = event.target.comment.value;
    setComments([...comments, comment]);
    event.target.comment.value = "";
  };
  return (
    <div className="container ">
      <h2>Ejercicio 13</h2>
      <p className="">
        Crear un componente que reciba como propiedad un objeto con información
        de un libro y permita añadir comentarios a una sección de comentarios en
        la misma página.
      </p>

      <div className="comtainerEjercicio">
        {books.map((book) => (
          <Books
            key={book.id}
            book={book}
            handleAddComment={handleAddComment}
          />
        ))}
      </div>
    </div>
  );
};
