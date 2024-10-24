import React from "react";
import CryptoRow from "../CryptoRow/CryptoRow";
import CryptoTableHeader from "../CryptoTableHeader/CryptoTableHeader";
import { Table, TableBody, TableContainer, Paper } from "@mui/material"; //Import the necessary components from MUI

const CryptoTable = ({ cryptoData }) => {
  return (
    <TableContainer
      component={Paper}
      style={{ maxHeight: "90vh", overflowY: "auto" }}
    >
      <Table>
        <CryptoTableHeader />
        {/*Rendering the table header */}
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
