import  { useState } from "react";

export const Books = ({book}) => {
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
        <h1>{book.title}</h1>
        <p>Author: {book.author}</p>
        <p>Genre: {book.genre}</p>

        <h2>Comments</h2>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>

        <form onSubmit={handleAddComment}>
          <input type="text" name="comment" placeholder="Add a comment" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};
