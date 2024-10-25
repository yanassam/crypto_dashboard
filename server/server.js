// server/server.js
import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors()); // Разрешаем CORS

// Маршрут для получения данных о криптовалютах
app.get("/crypto-data", async (req, res) => {
  const { count = 10, page = 1 } = req.query;

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
      }
    );
    res.json({ data: response.data, totalItems: 2500 });
  } catch (error) {
    console.error("Error fetching data from API", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
