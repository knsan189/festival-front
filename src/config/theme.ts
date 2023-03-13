import { createTheme } from "@mui/material";
import { blue } from "@mui/material/colors";

const theme = createTheme({
  typography: {
    fontFamily:
      '"Noto Sans KR", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
  },
  palette: {
    primary: {
      main: "#f65e57",
    },
    secondary: {
      main: blue[500],
    },
  },
  components: {
    MuiCardHeader: {
      defaultProps: {
        titleTypographyProps: {
          variant: "subtitle1",
        },
        subheaderTypographyProps: {
          variant: "body2",
        },
      },
    },
  },
});

export default theme;
