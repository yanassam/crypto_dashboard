import React from "react";
import CryptoRow from "../CryptoRow/CryptoRow";
import CryptoTableHeader from "../CryptoTableHeader/CryptoTableHeader";

//Import the necessary components from MUI
import { Table, TableBody, TableContainer, Paper } from "@mui/material";

const CryptoTable = ({ cryptoData }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <CryptoTableHeader /> {/*Rendering the table header */}
        <TableBody>
          {cryptoData.map((crypto) => (
            <CryptoRow key={crypto.id} crypto={crypto} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CryptoTable;
