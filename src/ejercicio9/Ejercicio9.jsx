import { ListFilter } from "./ListFilter";

export const Ejercicio9 = () => {
  let names = ["juan", "Luis", "Leonardo", "Jose", "Miguel", "Antonio"];
  return (
    <div>
      Ejercicio9
      <ListFilter names={names} />
    </div>
  );
};
