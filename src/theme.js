import { createTheme } from "@mui/material/styles";

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", //Primary color (e.g. for table headings)
    },
    secondary: {
      main: "#ff4081", // Secondary color (e.g. for buttons or accents)
    },
    success: {
      main: "#4caf50", //Color for positive change
    },
    error: {
      main: "#f44336", // Color for negative changes
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif", //Font settings
  },
});

export default theme;
