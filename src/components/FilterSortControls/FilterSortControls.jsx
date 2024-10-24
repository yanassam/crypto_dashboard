import React, { useState } from "react";
import {
  Button,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Box,
} from "@mui/material";

const FilterSortControls = ({ onSort, onFilter }) => {
  const [sortType, setSortType] = useState("price");
  const [filterValue, setFilterValue] = useState("");

  const handleSortChange = (e) => {
    setSortType(e.target.value);
    onSort(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilterValue(e.target.value);
  };

  const handleFilter = () => {
    onFilter(filterValue);
  };

  return (
    <Box display="flex" flexDirection="column" gap={2} mb={2}>
      {/* Сортировка */}
      <FormControl variant="outlined" fullWidth>
        <InputLabel>Сортировать по</InputLabel>
        <Select
          value={sortType}
          onChange={handleSortChange}
          label="Сортировать по"
        >
          <MenuItem value="price">Цена</MenuItem>
          <MenuItem value="change">Изменение за 24ч</MenuItem>
        </Select>
      </FormControl>

      {/* Фильтрация */}
      <TextField
        label="Минимальная цена"
        value={filterValue}
        onChange={handleFilterChange}
        variant="outlined"
        fullWidth
      />
      <Button variant="contained" color="secondary" onClick={handleFilter}>
        Filter
      </Button>
    </Box>
  );
};

export default FilterSortControls;
