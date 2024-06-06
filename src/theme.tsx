import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#009688"
    },
    secondary: {
      main: "#d500f9"
    },
    error: {
      main: red.A400
    }
  }
});

export default theme;
