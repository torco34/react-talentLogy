import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Ejercicio10 } from "../ejercicio10/Ejercicio10";
import { Ejercicio11 } from "../ejercicio11/Ejercicio11";
import { Ejercicio13 } from "../ejercicio13/Ejercicio13";
// import { Ejercicio14 } from "../ejercicio14/Ejercicio14";
// import { Ejercicio15 } from "../ejercicio15/Ejercicio15";
// import { Ejercicio16 } from "../ejercicio16/Ejercicio16";
// import { Ejercicio17 } from "../ejercicio17/Ejercicio17";
import { Galeria } from "../ejercicio18/Galeria";

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
          <Col>
            <Ejercicio13 />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
