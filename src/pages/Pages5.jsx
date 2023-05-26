import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Ejercicio17 } from "../ejercicio17/Ejercicio17";
import { Ejercicio18 } from "../ejercicio18/Ejercicio18";


export const Pages5 = () => {
  return (
    <div className="pages5">
      <Container>
        <Row>
          <Col>
            <Ejercicio17 />
          </Col>
          <Col>
            <Ejercicio18 />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
