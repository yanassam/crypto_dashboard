// src/components/CryptoTable.jsx
import React from "react";
import CryptoRow from "../CryptoRow/CryptoRow";
import CryptoTableHeader from "../CryptoTableHeader/CryptoTableHeader";

const CryptoTable = ({ cryptoData }) => {
  return (
    <table>
      <CryptoTableHeader /> {/* Рендерим шапку таблицы один раз */}
      <tbody>
        {cryptoData.map((crypto) => (
          <CryptoRow key={crypto.id} crypto={crypto} />
        ))}
      </tbody>
    </table>
  );
};

export default CryptoTable;
