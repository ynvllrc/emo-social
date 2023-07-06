import { makeStyles } from "@mui/styles";
import { createTheme } from "@mui/material/styles";

const theme = createTheme();
const useStyles = makeStyles(() => ({
  body:{
    backgroundImage: 'url(././Loading/Loading_Screen.png)',
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
    backgroundImage: 'url(././Loading/Play.png)',
    backgroundRepeat:"no-repeat",
    backgroundSize: "400px",
    marginBlockStart: "20vh",
    marginLeft:"85vh",
    height: "65vh",
    [theme.breakpoints.up("md")]: {
      width: "400px",
    },
    [theme.breakpoints.down("md")]: {
   width: "80%",
   display: "flex",
   zIndex: 1,
   marginBlockStart: "20vh",
   marginBlockEnd: "-100px",
   marginLeft:"19vh",
   backgroundImage: 'url(././Loading/Play.png)',
   backgroundRepeat:"no-repeat",
   backgroundSize: "100px",
   backgroundPosition: "center",
   alignItems: "center",
    },
  },
}));

export default useStyles;
