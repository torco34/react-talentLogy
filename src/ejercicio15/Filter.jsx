import { useState } from "react";

export const Filter = ({ news }) => {
  const [filteredNews, setFilteredNews] = useState(news);
  const [filterDate, setFilterDate] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [filterKeyword, setFilterKeyword] = useState("");

  const handleFilter = () => {
    let filtered = news;

    // Filtrar por fecha
    if (filterDate) {
      filtered = filtered.filter((item) => item.date === filterDate);
    }

    // Filtrar por categoría
    if (filterCategory) {
      filtered = filtered.filter((item) => item.category === filterCategory);
    }

    // Filtrar por palabras clave
    if (filterKeyword) {
      filtered = filtered.filter((item) =>
        item.title.toLowerCase().includes(filterKeyword.toLowerCase())
      );
    }

    setFilteredNews(filtered);
  };

  return (
    <div>
      <h2>News Filter</h2>

      <div>
        <label htmlFor="dateFilter">Fecha:</label>
        <input
          id="dateFilter"
          type="text"
          value={filterDate}
          onChange={(e) => setFilterDate(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="categoryFilter">Categoría:</label>
        <input
          id="categoryFilter"
          type="text"
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="keywordFilter">Palabra clave:</label>
        <input
          id="keywordFilter"
          type="text"
          value={filterKeyword}
          onChange={(e) => setFilterKeyword(e.target.value)}
        />
      </div>

      <button onClick={handleFilter}>Filtrar</button>

      <ul>
        {filteredNews.map((item) => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.date}</p>

            <p>{item.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
