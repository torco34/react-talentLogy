import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./css/Country.css";
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
                </li>
              ))}
            </ul>
            {selectedCountry && (
              <div>
                <h5>Información detallada:</h5>
                <h5 className="text-dark">{selectedCountry.name}:</h5>
                <p>{selectedCountry.culture}</p>
                <p>{selectedCountry.history}</p>
                <p>{selectedCountry.language}</p>
                <p>{selectedCountry.touristSpots}</p>
              </div>
            )}
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
};
