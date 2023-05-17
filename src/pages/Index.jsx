import { Ejercicio1 } from "../ejercicio1/Ejercicio1";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Index.css";
import { Ejercicio2 } from "../ejercicio2/Ejercicio2";
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
        <Col>3 of 3</Col>
      </Row>
      <Row>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>
  );
};
