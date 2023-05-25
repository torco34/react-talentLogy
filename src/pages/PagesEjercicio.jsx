import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Index.css";

import { Ejercicio14 } from "../ejercicio14/Ejercicio14";
import { Ejercicio15 } from "../ejercicio15/Ejercicio15";
export const PagesEjercicio = () => {
  return (
    <div className=" pages3">
      <Container>
        <Row>
          <Col>
            <Ejercicio14 />
          </Col>
          <Col>
            <Ejercicio15 />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
