export const NumberSumar = ({ number }) => {
  const suma = number.reduce((total, numero) => total + numero, 0);

  return <div>La suma de los números es: {suma}</div>;
};
