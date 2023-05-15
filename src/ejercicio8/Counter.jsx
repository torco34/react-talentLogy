import { useEffect, useState } from "react";

export const Counter = ({ number, stop }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    if (stop) {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div>
      <p>Propiedad: {number}</p>
      <p>Contador: {count}</p>
      <button></button>
    </div>
  );
};
