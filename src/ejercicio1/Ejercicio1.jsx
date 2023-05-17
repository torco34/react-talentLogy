import { TituloTexto } from "./TituloTexto";
// import  "./Ejerc1.css";
export const Ejercicio1 = () => {
  return (
    <div className="cuerpo">
      <div className="pt-4">
        <h2>Ejercicio 1</h2>
        <p>
          Crear un componente que renderice un título y un párrafo de texto.
        </p>
        <div className="border">
          <TituloTexto
            titulo="El titulo"
            texto="Este es el texto que me pidieron"
          />
        </div>
      </div>
    </div>
  );
};
