import { ThemeOptions } from "@mui/material";
import { blue, green, orange, red, yellow } from "@mui/material/colors";

export const darkPalette: ThemeOptions["palette"] = {
  mode: "dark",
  secondary: {
    main: blue[600],
    contrastText: "#fff",
  },
  primary: {
    main: orange[500],
    contrastText: "#fff",
  },
  error: {
    main: red[600],
  },
  warning: {
    main: yellow[600],
  },
  success: {
    main: green[400],
  },
};