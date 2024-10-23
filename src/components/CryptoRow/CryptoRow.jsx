import React from "react";

const CryptoRow = ({ crypto }) => {
  return (
    <tr>
      <td>
        <img src={crypto.image} alt={crypto.name} width="30" height="30" />
      </td>
      <td>{crypto.name}</td>
      <td>${crypto.current_price.toLocaleString()}</td>
      <td
        style={{
          color: crypto.price_change_percentage_24h >= 0 ? "green" : "red",
        }}
      >
        {crypto.price_change_percentage_24h.toFixed(2)}%
      </td>
    </tr>
  );
};

export default CryptoRow;
