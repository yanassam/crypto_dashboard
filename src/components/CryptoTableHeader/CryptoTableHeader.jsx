import React from "react";
import { TableCell, TableHead, TableRow } from "@mui/material"; //Importing MUI components

const CryptoTableHeader = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>Иконка</TableCell>
        <TableCell>Криптовалюта</TableCell>
        <TableCell>Цена (USD)</TableCell>
        <TableCell>Изменение за 24ч</TableCell>
      </TableRow>
    </TableHead>
  );
};

export default CryptoTableHeader;
