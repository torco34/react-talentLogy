import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Ejercicio17 } from "../ejercicio17/Ejercicio17";
import { Galeria } from "../ejercicio18/Galeria";

export const Tarea = () => {
  return (
    <div className="pages5">
      <Container>
        <Row>
          <Col>
            <Ejercicio17 />
          </Col>
          <Col>
            <Galeria />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
