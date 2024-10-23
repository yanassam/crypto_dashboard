import React from "react";
import { Button } from "@mui/material";

const PaginationControls = ({ currentPage, onNextPage, onPrevPage }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: "20px",
      }}
    >
      <Button
        variant="contained"
        color="primary"
        onClick={onPrevPage}
        disabled={currentPage === 1}
      >
        Предыдущая страница
      </Button>
      <span>Страница: {currentPage}</span>
      <Button variant="contained" color="primary" onClick={onNextPage}>
        Следующая страница
      </Button>
    </div>
  );
};

export default PaginationControls;
