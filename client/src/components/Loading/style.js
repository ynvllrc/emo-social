import { makeStyles } from "@mui/styles";
import { createTheme } from "@mui/material/styles";

const theme = createTheme();
const useStyles = makeStyles(() => ({
  body: {
    backgroundImage: "url(././Loading/Loading_Screen.png)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
  },
  PlayButtons: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "10px",
    marginBlockEnd: "-550px",
    backgroundImage: "url(././Loading/Play.png)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "400px",
    marginBlockStart: "20vh",
    marginLeft: "85vh",
    height: "65vh",
  },
}));

export default useStyles;
