import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Ejercicio7 } from "../ejercicio7/Ejercicio7";
import { Ejercicio8 } from "../ejercicio8/Ejercicio8";
import { Ejercicio9 } from "../ejercicio9/Ejercicio9";
import { Ejercicio10 } from "../ejercicio10/Ejercicio10";
import { Ejercicio11 } from "../ejercicio11/Ejercicio11";
// import { Carrito } from "../ejercicio12/Carrito";
import { Card } from "../ejercicio12/Card";
// import { Carrito } from "../ejercicio12/Carrito";

export const Pages2 = () => {
  return (
    <div className="pages">
      <Container>
        <Row>
          <Col>
            <Ejercicio7 />
          </Col>
          <Col>
            <Ejercicio8 />
          </Col>
          <Col>
            <Ejercicio9 />
          </Col>
        </Row>
        <Row>
          <Col>
            <Ejercicio10 />
          </Col>
          <Col>
            <Ejercicio11 />
          </Col>
          <Col>
            <Card />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
