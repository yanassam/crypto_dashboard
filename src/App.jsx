// src/App.jsx
import React, { useState, useEffect } from "react";
import { fetchCryptoData } from "./api";
import CryptoTable from "./components/CryptoTable/CryptoTable";
import PaginationControls from "./components/PaginationControls/PaginationControls";
import SearchBar from "./components/SearchBar/SearchBar";
import FilterSortControls from "./components/FilterSortControls/FilterSortControls";
import { Button, Container, Grid, Paper } from "@mui/material";

function App() {
  const [cryptoData, setCryptoData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [countPerPage, setCountPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortType, setSortType] = useState("price");
  const [filterValue, setFilterValue] = useState(0);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchCryptoData(countPerPage, page);
        let filteredData = data;

        // Фильтрация по минимальной цене
        if (filterValue > 0) {
          filteredData = filteredData.filter(
            (crypto) => crypto.current_price >= filterValue
          );
        }

        // Поиск по имени
        if (searchQuery) {
          filteredData = filteredData.filter((crypto) =>
            crypto.name.toLowerCase().includes(searchQuery.toLowerCase())
          );
        }

        // Сортировка
        if (sortType === "price") {
          filteredData = filteredData.sort(
            (a, b) => b.current_price - a.current_price
          );
        } else if (sortType === "change") {
          filteredData = filteredData.sort(
            (a, b) =>
              b.price_change_percentage_24h - a.price_change_percentage_24h
          );
        }

        setCryptoData(filteredData);
        setLoading(false);
      } catch (err) {
        setError("Ошибка при загрузке данных");
        setLoading(false);
      }
    };

    getData();
  }, [page, countPerPage, searchQuery, sortType, filterValue]);

  const handleNextPage = () => setPage((prevPage) => prevPage + 1);
  const handlePrevPage = () => setPage((prevPage) => Math.max(prevPage - 1, 1));

  const handleSearch = (query) => {
    setSearchQuery(query);
    setPage(1); // Возвращаемся на первую страницу при поиске
  };

  const handleSort = (type) => {
    setSortType(type);
  };

  const handleFilter = (minPrice) => {
    setFilterValue(minPrice);
  };

  const handleReset = () => {
    setSearchQuery("");
    setFilterValue(0);
    setSortType("price");
    setPage(1);
  };

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>{error}</p>;

  return (
    <Container>
      <Grid container spacing={3}>
        {/* Сайтбар для фильтрации и сортировки */}
        <Grid item xs={12} sm={4}>
          <Paper style={{ padding: 16 }}>
            <SearchBar onSearch={handleSearch} />
            <FilterSortControls onSort={handleSort} onFilter={handleFilter} />
            <Button
              variant="outlined"
              color="secondary"
              onClick={handleReset}
              fullWidth
              style={{ marginTop: 16 }}
            >
              Reset all filters
            </Button>
          </Paper>
        </Grid>

        {/* Таблица с криптовалютами */}
        <Grid item xs={12} sm={8}>
          {cryptoData.length > 0 ? (
            <CryptoTable cryptoData={cryptoData} />
          ) : (
            <p>No data available</p>
          )}

          {/* Пагинация */}
          <PaginationControls
            currentPage={page}
            onNextPage={handleNextPage}
            onPrevPage={handlePrevPage}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
