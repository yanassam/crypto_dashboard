import React from "react";
import { TableCell, TableHead, TableRow } from "@mui/material"; //Importing MUI components
import { useTheme } from "@mui/material/styles"; // Connecting a hook to use the theme

const CryptoTableHeader = () => {
  const theme = useTheme(); // Get the current topic
  return (
    <TableHead>
      <TableRow style={{ backgroundColor: theme.palette.primary.main }}>
        <TableCell style={{ color: theme.palette.common.white }}>
          Иконка
        </TableCell>
        <TableCell style={{ color: theme.palette.common.white }}>
          Криптовалюта
        </TableCell>
        <TableCell style={{ color: theme.palette.common.white }}>
          Цена (USD)
        </TableCell>
        <TableCell style={{ color: theme.palette.common.white }}>
          Изменение за 24ч
        </TableCell>
      </TableRow>
    </TableHead>
  );
};

export default CryptoTableHeader;
