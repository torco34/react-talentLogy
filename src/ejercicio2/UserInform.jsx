export const UserInform = ({ user }) => {
  const { name, age, city } = user;
  return (
    <div>
      <h2>Nombre: {name}</h2>
      <h2>edad: {age}</h2>
      <h2>ciudad: {city}</h2>
    </div>
  );
};
