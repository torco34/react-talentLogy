import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";
import { Ejercicio14 } from "../ejercicio14/Ejercicio14";
import { Ejercicio15 } from "../ejercicio15/Ejercicio15";
export const Ejercicio = () => {
  return (
    <div className="container">
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
