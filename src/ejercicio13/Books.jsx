import { useState } from "react";

import "./Book.css";
export const Books = ({ book }) => {
  const [comments, setComments] = useState([]);

  const handleAddComment = (event) => {
    event.preventDefault();
    const comment = event.target.comment.value;
    setComments([...comments, comment]);
    event.target.comment.value = "";
  };

  return (
    <div>
      <div className="containerLibro  card">
        <img src={book.image} alt="" />
        <h3>{book.name}</h3>
        <p>Author: {book.author}</p>
        <p>description: {book.description}</p>

        <h2>Comentario</h2>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>

        <form onSubmit={handleAddComment}>
          <input type="text" name="comment" placeholder="Agregar comentarios" />
        </form>
      </div>
    </div>
  );
};
