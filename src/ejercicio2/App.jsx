import { Objeto } from "./components/O";

export const App = () => {
  const user = {
    name: "Juan",
    age: 25,
    city: "Madrid",
  };
  return (
    <div>
      <Objeto user={user} />
    </div>
  );
};
