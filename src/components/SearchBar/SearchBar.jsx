import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <Box display="flex" flexDirection="column" gap={2} mb={2}>
      <TextField
        label="Введите название криптовалюты"
        value={searchTerm}
        onChange={handleInputChange}
        variant="outlined"
        fullWidth
      />
      <Button variant="contained" color="primary" onClick={handleSearch}>
        Search
      </Button>
    </Box>
  );
};

export default SearchBar;
