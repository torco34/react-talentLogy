import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Ejercicio10 } from "../ejercicio10/Ejercicio10";
import { Ejercicio11 } from "../ejercicio11/Ejercicio11";
import { Ejercicio13 } from "../ejercicio13/Ejercicio13";

export const Pages2 = () => {
  return (
    <div className="pages">
      <Container>
        <Row>
          <Col>
            <Ejercicio10 />
          </Col>
          <Col>
            <Ejercicio11 />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
