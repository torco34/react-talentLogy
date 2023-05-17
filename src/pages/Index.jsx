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
export const Index = () => {
  return (
    <Container className="cuerpo">
      <Row>
        <Col>
          <Ejercicio1 />
        </Col>
        <Col>
          <Ejercicio2 />
        </Col>
        <Col>
          <Ejercici3 />
        </Col>
      </Row>
      <Row>
        <Col>
          <Ejercicio4 />
        </Col>
        <Col>
          <Ejercicio5 />
        </Col>
        <Col><Ejercicio6/></Col>
      </Row>
    </Container>
  );
};
