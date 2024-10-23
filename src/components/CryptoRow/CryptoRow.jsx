import React from "react";
import { TableRow, TableCell } from "@mui/material";

const CryptoRow = ({ crypto }) => {
  return (
    <TableRow>
      <TableCell>
        <img src={crypto.image} alt={crypto.name} width="30" height="30" />
      </TableCell>
      <TableCell>{crypto.name}</TableCell>
      <TableCell>${crypto.current_price.toLocaleString()}</TableCell>
      <TableCell
        style={{
          color: crypto.price_change_percentage_24h >= 0 ? "green" : "red",
        }}
      >
        {crypto.price_change_percentage_24h.toFixed(2)}%
      </TableCell>
    </TableRow>
  );
};

export default CryptoRow;
