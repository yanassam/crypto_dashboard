import React, { useState, useEffect } from "react";
import { fetchCryptoData } from "./api";
import CryptoTable from "./components/CryptoTable/CryptoTable";
import PaginationControls from "./components/PaginationControls/PaginationControls";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  const [cryptoData, setCryptoData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [countPerPage, setCountPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchCryptoData(countPerPage, page);
        const filteredData = searchQuery
          ? data.filter((crypto) =>
              crypto.name.toLowerCase().includes(searchQuery.toLowerCase())
            )
          : data;
        setCryptoData(filteredData);
        setLoading(false);
      } catch (err) {
        setError("Ошибка при загрузке данных");
        setLoading(false);
      }
    };

    getData();
  }, [page, countPerPage, searchQuery]);

  const handleNextPage = () => setPage((prevPage) => prevPage + 1);
  const handlePrevPage = () => setPage((prevPage) => Math.max(prevPage - 1, 1));

  const handleSearch = (query) => {
    setSearchQuery(query);
    setPage(1); //Return to the first page when searching
  };

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Crypto Dashboard</h1>
      <SearchBar onSearch={handleSearch} />
      <CryptoTable cryptoData={cryptoData} />
      <PaginationControls
        currentPage={page}
        onNextPage={handleNextPage}
        onPrevPage={handlePrevPage}
      />
    </div>
  );
}

export default App;
