// src/App.jsx
import React, { useState, useEffect } from "react";
import { fetchCryptoData } from "./api";
import CryptoTable from "./components/CryptoTable/CryptoTable";

function App() {
  const [cryptoData, setCryptoData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchCryptoData(10); // Запрашиваем данные для 10 криптовалют
        setCryptoData(data);
        setLoading(false);
      } catch (err) {
        setError("Ошибка при загрузке данных");
        setLoading(false);
      }
    };

    getData();
  }, []);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Crypto Dashboard</h1>
      <CryptoTable cryptoData={cryptoData} />
    </div>
  );
}

export default App;
