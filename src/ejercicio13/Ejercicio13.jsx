import { Books } from "./Books";

export const Ejercicio13 = () => {
  const book = {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Fiction",
  };
  return (
    <div>
      <Books book={book} />
    </div>
  );
};
