import { Ejercicio1 } from "../ejercicio1/Ejercicio1";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Index.css";
import { Ejercicio2 } from "../ejercicio2/Ejercicio2";
import { Ejercici3 } from "../ejercicio3/Ejercici3";
import { Ejercicio4 } from "../ejercicio4/Ejercicio4";
import { Ejercicio5 } from "../ejercicio5/Ejercicio5";
import { Ejercicio6 } from "../ejercicio6/Ejercicio6";
import { Ejercicio7 } from "../ejercicio7/Ejercicio7";
import { Ejercicio8 } from "../ejercicio8/Ejercicio8";
import { Ejercicio9 } from "../ejercicio9/Ejercicio9";
export const Index = () => {
  return (
    <div className="cuerpo">
      <Container className="container">
        <Row>
          <Col className="border pt-3">
            <Ejercicio1 />
          </Col>
          <Col className="border pt-3">
            <Ejercicio2 />
          </Col>
          <Col className="border pt-3">
            <Ejercici3 />
          </Col>
        </Row>
        <Row>
          <Col className="border pt-3">
            <Ejercicio4 />
          </Col>
          <Col className="border pt-3">
            <Ejercicio5 />
          </Col>
          <Col className="border">
            <Ejercicio6 />
          </Col>
        </Row>
        <Row>
          <Col className="border">
            <Ejercicio7 />
          </Col>
          <Col className="border">
            <Ejercicio8 />
          </Col>
          <Col className="border">
            <Ejercicio9 />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
