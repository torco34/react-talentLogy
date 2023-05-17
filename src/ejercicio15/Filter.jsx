import { useState } from "react";

export const Filter = ({ newsList }) => {
  const [filteredNews, setFilteredNews] = useState(newsList);
  const [filterDate, setFilterDate] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [filterKeyword, setFilterKeyword] = useState("");
  const handleFilter = () => {
    let filtered = newsList;

    if (filterDate) {
      filtered = filtered.filter((news) => news.date === filterDate);
    }

    if (filterCategory) {
      filtered = filtered.filter((news) => news.category === filterCategory);
    }

    if (filterKeyword) {
      filtered = filtered.filter((news) =>
        news.title.toLowerCase().includes(filterKeyword.toLowerCase())
      );
    }

    setFilteredNews(filtered);
  };

  return (
    <div>
      {" "}
      <div>
        <h2>News Filter</h2>

        <label>
          Date:
          <input
            type="text"
            value={filterDate}
            onChange={(e) => setFilterDate(e.target.value)}
          />
        </label>

        <label>
          Category:
          <input
            type="text"
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
          />
        </label>

        <label>
          Keyword:
          <input
            type="text"
            value={filterKeyword}
            onChange={(e) => setFilterKeyword(e.target.value)}
          />
        </label>

        <button onClick={handleFilter}>Filter</button>

        {filteredNews.map((news, index) => (
          <div key={index}>
            <h3>{news.title}</h3>
            <p>{news.date}</p>
            <p>{news.category}</p>
            <p>{news.content}</p>
          </div>
        ))}
      </div>
    s</div>
  );
};
