import { useState } from "react";
export const BotonEvent = () => {
  const [showMessage, setShowMessage] = useState(false);
  const handleClick = () => {
    setShowMessage(!showMessage);
  };
  return (
    <div>
      <button className="btn btn-light text-" onClick={handleClick}>
        Mostrar mensaje
      </button>

      {showMessage && <p>Hola, has hecho clic en el botón.</p>}
    </div>
  );
};
