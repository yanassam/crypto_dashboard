import axios from "axios";

// Function to get cryptocurrency data via CoinGecko proxy to bypass CORS

export const fetchCryptoData = async (count = 10, page = 1) => {
  try {
    const response = await axios.get(`http://localhost:5000/crypto-data`, {
      params: {
        count,
        page,
      },
    });

    return {
      data: response.data.data,
      totalItems: response.data.totalItems,
    };
  } catch (error) {
    console.error("Error fetching data from API", error);
    throw error;
  }
};
