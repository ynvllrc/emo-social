import { makeStyles } from "@mui/styles";
import { createTheme } from "@mui/material/styles";

const theme = createTheme();
const useStyles = makeStyles(() => ({
  body:{
    backgroundImage: 'url(././Character_Screen1.png)',
    backgroundPosition: "center",
    backgroundSize: "cover",
    minHeight: "100vh",
    minWidth: "100vh",
    display: "flex",
    alignItems: "center",
  },




  MaleButton: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "10px",
    marginBlockEnd: "-550px",
    backgroundImage: 'url(././Boy.png)',
    backgroundRepeat:"no-repeat",
    backgroundSize: "300px",
    marginBlockStart: "20vh",

    height: "65vh",
    [theme.breakpoints.up("md")]: {
      width: "400px",
    },
    [theme.breakpoints.down("md")]: {
   width: "400%",
   display: "flex",
   zIndex: 1,
   marginBlockStart: "30vh",
   marginBlockEnd: "90px",
   marginLeft:"200px",
   backgroundImage: 'url(././Boy.png)',
   backgroundRepeat:"no-repeat",
   backgroundSize: "100px",
   backgroundPosition: "center",
   alignItems: "center",
    },
  },
  FemaleButton: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "10px",

    backgroundImage: 'url(././Girl.png)',
    backgroundRepeat:"no-repeat",
    backgroundSize: "300px",
    marginBlockStart: "20vh",
    marginLeft:"85vh",
    height: "65vh",
    [theme.breakpoints.up("md")]: {
      width: "80px",
    },
    [theme.breakpoints.down("md")]: {
   width: "80%",
   display: "flex",
   zIndex: 1,
   marginBlockStart: "30vh",
   marginBlockEnd: "90px",
   marginLeft:"-400px",
   backgroundImage: 'url(././Girl.png)',
   backgroundRepeat:"no-repeat",
   backgroundSize: "100px",
   backgroundPosition: "center",
   alignItems: "center",
    },
  },

  DoneButton:{
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "10px",
    marginBlockEnd: "-550px",
   
    backgroundImage: 'url(./././Character/done.png)',
    backgroundRepeat:"no-repeat",
    backgroundSize: "300px",
    marginBlockStart: "20vh",

    height: "65vh",
    [theme.breakpoints.up("md")]: {
      width: "400px",
    },
    [theme.breakpoints.down("md")]: {
   width: "80%",
   display: "flex",
   zIndex: 1,
   marginBlockStart: "30vh",
   marginBlockEnd: "-250px",
   marginLeft:"-180px",
   backgroundImage: 'url(././done.png)',
   backgroundRepeat:"no-repeat",
   backgroundSize: "150px",

   alignItems: "center",
    },
  },
  


}));

export default useStyles;
