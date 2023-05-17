export const UserInform = ({ user }) => {
  const { name, age, city } = user;
  return (
    <div>
      <h2>Nombre: {name}</h2>
      <h2>Edad: {age}</h2>
      <h2>Ciudad: {city}</h2>
    </div>
  );
};
