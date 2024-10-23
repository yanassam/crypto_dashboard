import React from "react";
import { TableCell, TableHead, TableRow } from "@mui/material"; //Importing MUI components
import { useTheme } from "@mui/material/styles"; // Connecting a hook to use the theme

const CryptoTableHeader = () => {
  const theme = useTheme(); // Get the current topic
  return (
    <TableHead>
      <TableRow
        style={{ backgroundColor: theme.palette.primary.main, color: "#fff" }}
      >
        <TableCell style={{ color: "#fff" }}>Иконка</TableCell>
        <TableCell style={{ color: "#fff" }}>Криптовалюта</TableCell>
        <TableCell style={{ color: "#fff" }}>Цена (USD)</TableCell>
        <TableCell style={{ color: "#fff" }}>Изменение за 24ч</TableCell>
      </TableRow>
    </TableHead>
  );
};

export default CryptoTableHeader;
