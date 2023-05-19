import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export const CountryData = ({ dataLibro }) => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div className="containers">
      <Container>
        <Row>
          <Col>
            <h2>Lista de países:</h2>
            <ul>
              {dataLibro.map((country, index) => (
                <li key={index} onClick={() => handleCountrySelect(country)}>
                  {country.name}
                  {/* {country.culture} */}
                </li>
              ))}
            </ul>
          </Col>
          <Col>
            {selectedCountry && (
              <div>
                <h2>Información detallada:</h2>
                <h3>{selectedCountry.name}</h3>
                <p>{selectedCountry.culture}</p>
                <p>{selectedCountry.history}</p>
                <p>{selectedCountry.language}</p>
                <p>{selectedCountry.touristSpots}</p>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};
