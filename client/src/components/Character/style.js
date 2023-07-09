import { makeStyles } from "@mui/styles";
import { createTheme } from "@mui/material/styles";

const theme = createTheme();
const useStyles = makeStyles(() => ({
  body: {
    backgroundImage: "url(././Character_Screen1.png)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    minHeight: "100vh",
    minWidth: "100vh",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
}));

export default useStyles;
