import { useState } from "react";

export const ListFilter = ({ names }) => {
  const [filter, setFilter] = useState("");
  const filteredNames = names.filter((name) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div>
      <input
        type="text"
        placeholder="Filtrar por letras"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <ul>
        {filteredNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};
