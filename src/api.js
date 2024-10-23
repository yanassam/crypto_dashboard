import axios from "axios";

// Function to get cryptocurrency data via CoinGecko proxy to bypass CORS

export const fetchCryptoData = async (count = 10, page = 1) => {
  try {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets",
      {
        params: {
          vs_currency: "usd",
          order: "market_cap_desc",
          per_page: count,
          page: page,
        },
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data from API", error);
    throw error;
  }
};
