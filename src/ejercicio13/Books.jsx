import { useState } from "react";

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
      <div>
        <h3>{book.title}</h3>
        <p>Author: {book.author}</p>
        <p>Genre: {book.genre}</p>

        <h2>Comentario</h2>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>

        <form onSubmit={handleAddComment}>
          <input type="text" name="comment" placeholder="Agregar comentarios" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};
