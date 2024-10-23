// src/App.jsx
import React, { useState, useEffect } from "react";
import { fetchCryptoData } from "./api";
import CryptoTable from "./components/CryptoTable/CryptoTable";

function App() {
  const [cryptoData, setCryptoData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [countPerPage, setCountPerPage] = useState(10);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchCryptoData(10); //Requesting data for 10 cryptocurrencies
        setCryptoData(data);
        setLoading(false);
      } catch (err) {
        setError("Ошибка при загрузке данных");
        setLoading(false);
      }
    };

    getData();
  }, [page, countPerPage]);

  const handleNextPage = () => setPage((prevPage) => prevPage + 1);
  const handlePrevPage = () => setPage((prevPage) => Math.max(prevPage - 1, 1));

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Crypto Dashboard</h1>
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
