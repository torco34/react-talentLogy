import { useState } from "react";
import peliculas from "./data";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Pelicula.css";
export const Peliculascomp = () => {
  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null);

  const mostrarDetallesPelicula = (pelicula) => {
    setPeliculaSeleccionada(pelicula);
  };
  const cerrarDetallesPelicula = () => {
    setPeliculaSeleccionada(null);
  };
  return (
    <div className="">
      <Container>
        <Row>
          <Col className="containerPelículas ">
            {peliculas.map((pelicula) => (
              <div className="img" key={pelicula.id}>
                <h2>{pelicula.titulo}</h2>
                <p>{pelicula.descripcion}</p>
                <img src={pelicula.img} alt={pelicula.name} />
                {/* <p>Calificación: {pelicula.description} estrellas</p> */}
                <br></br>
                <button
                  onClick={() => mostrarDetallesPelicula(pelicula)}
                  className="btn btn-dark"
                >
                  Ver detalles
                </button>
              </div>
            ))}
          </Col>
          <Col>
            {peliculaSeleccionada ? (
              <div className="imagen">
                <h2>{peliculaSeleccionada.name}</h2>
                <p>{peliculaSeleccionada.descripcion}</p>
                <img
                  src={peliculaSeleccionada.img}
                  alt={peliculaSeleccionada.name}
                />
                <p>
                  Calificación: {peliculaSeleccionada.description} estrellas
                </p>
                <button
                  onClick={cerrarDetallesPelicula}
                  className="btn btn-dark"
                >
                  Cerrar detalles
                </button>
              </div>
            ) : null}
          </Col>
        </Row>
      </Container>
    </div>
  );
};
