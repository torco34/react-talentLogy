import { useState } from "react";
import peliculas from "./data";
export const Peliculascomp = () => {
  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null);

  const mostrarDetallesPelicula = (pelicula) => {
    setPeliculaSeleccionada(pelicula);
  };
  const cerrarDetallesPelicula = () => {
    setPeliculaSeleccionada(null);
  };
  return (
    <div>
      {peliculas.map((pelicula) => (
        <div key={pelicula.id}>
          <h2>{pelicula.titulo}</h2>
          <p>{pelicula.descripcion}</p>
          <img src={pelicula.img} alt={pelicula.name} />
          <p>Calificación: {pelicula.description} estrellas</p>
          <button onClick={() => mostrarDetallesPelicula(pelicula)}>
            Ver detalles
          </button>
        </div>
      ))}
      {peliculaSeleccionada ? (
        <div>
          <h2>{peliculaSeleccionada.name}</h2>
          <p>{peliculaSeleccionada.descripcion}</p>
          <img src={peliculaSeleccionada.img} alt={peliculaSeleccionada.name} />
          <p>Calificación: {peliculaSeleccionada.description} estrellas</p>
          <button onClick={cerrarDetallesPelicula}>Cerrar detalles</button>
        </div>
      ) : null}
    </div>
  );
};
