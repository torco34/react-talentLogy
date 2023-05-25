import { useState } from "react";
import peliculas from "./data";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Pelicula.css";
import { BsFillStarFill } from "react-icons/bs";

export const Peliculascomp = () => {
  const [strings, setStrings] = useState(0);
  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null);
  function string() {
    setStrings(true);
  }
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
                <div className="estrella">
                  {Array(pelicula.string)
                    .fill()
                    .map((_, i) => (
                      <BsFillStarFill onClick={string} />
                    ))}

                  {/* {strings} */}
                </div>

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
                <p className="estrella">
                  {Array(peliculaSeleccionada.string)
                    .fill()
                    .map((_, i) => (
                      <BsFillStarFill onClick={string} />
                    ))}
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
