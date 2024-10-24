import React from "react";
import { Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const PaginationControls = ({ currentPage, onNextPage, onPrevPage }) => {
  const theme = useTheme(); //Connecting the topic
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
        style={{ backgroundColor: theme.palette.primary.main }}
      >
        Предыдущая страница
      </Button>
      <span>Страница: {currentPage}</span>
      <Button
        variant="contained"
        color="primary"
        onClick={onNextPage}
        style={{ backgroundColor: theme.palette.primary.main }}
      >
        Следующая страница
      </Button>
    </div>
  );
};

export default PaginationControls;
