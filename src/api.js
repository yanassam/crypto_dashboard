import axios from "axios";

// Function for getting data about cryptocurrencies
export const fetchCryptoData = async (count = 10) => {
  const response = await axios.get(
    "https://api.coingecko.com/api/v3/coins/markets",
    {
      params: {
        vs_currency: "usd",
        order: "market_cap_desc",
        per_page: count,
        page: 1,
      },
    }
  );
  return response.data;
};
