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
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const { data, totalItems } = await fetchCryptoData(countPerPage, page);

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
        setTotalPages(Math.ceil(totalItems / countPerPage)); // Calculate the total number of pages
        setLoading(false); // Completing the loading state
      } catch (err) {
        setError("Ошибка при загрузке данных");
        setLoading(false);
      }
    };

    getData();
  }, [page, countPerPage, searchQuery, sortType, filterValue]);

  const handleNextPage = () => {
    if (page < totalPages) {
      // Let's check if this is the last page
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => setPage((prevPage) => Math.max(prevPage - 1, 1));

  const handleSearch = (query) => {
    setSearchQuery(query);
    setPage(1); // Return to the first page when searching
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
    <Container style={{ maxWidth: "100vw", overflow: "hidden" }}>
      <Grid container spacing={3}>
        {/* Sitebar for filtering and sorting */}
        <Grid item xs={12} sm={4}>
          <Paper style={{ padding: 16, marginBottom: 16 }}>
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

        {/* Table with cryptocurrencies */}
        <Grid item xs={12} sm={8}>
          {cryptoData.length > 0 ? (
            <CryptoTable cryptoData={cryptoData} />
          ) : (
            <p>No data available</p>
          )}

          {/* Pagination */}
          <PaginationControls
            currentPage={page}
            totalPages={totalPages} //Display the total number of pages
            onNextPage={handleNextPage}
            onPrevPage={handlePrevPage}
            disableNext={page >= totalPages || loading} // Disable the button on the last page
            disablePrev={page === 1 || loading} //Disable the button on the first page
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
