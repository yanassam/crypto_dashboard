import React, { useState, useEffect } from "react";
import CryptoTable from "../CryptoTable/CryptoTable";
import { CircularProgress } from "@mui/material";

const CryptoTableWrapper = ({ cryptoData, loading }) => {
  if (loading) {
    return <CircularProgress />; // Show loading indicator only inside table
  }

  if (cryptoData.length === 0) {
    return <p>No data available</p>;
  }

  return <CryptoTable cryptoData={cryptoData} />;
};

export default React.memo(CryptoTableWrapper); // Using React.memo to Prevent Extra Renders
