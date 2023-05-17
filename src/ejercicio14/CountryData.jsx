import { useState } from "react";

export const CountryData = ({ countriesData }) => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div>
      <h2>Lista de países:</h2>
      <ul>
        {countriesData.map((country, index) => (
          <li key={index} onClick={() => handleCountrySelect(country)}>
            {country.name}
            {country.culture}
          </li>
        ))}
      </ul>

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
    </div>
  );
};
