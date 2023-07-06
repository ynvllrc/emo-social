import { makeStyles } from "@mui/styles";
import { createTheme } from "@mui/material/styles";

const theme = createTheme();
const useStyles = makeStyles(() => ({
  body:{
    backgroundImage: 'url(././Level1_background.png)',
    backgroundPosition: "center",
    backgroundSize: "cover",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
  },
 
  NameTag: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "10px",
    marginBlockEnd: "180px",
    marginBlockStart: "-20vh",
    marginLeft:"85vh",
    height: "65vh",
    [theme.breakpoints.up("md")]: {
      width: "400px",
    },
    [theme.breakpoints.down("md")]: {
   width: "250%",
  
   zIndex: 1,
   marginBlockEnd: "150px",
   alignItems: "center",
   justifyContent: "center",
    },
  },


  BackButton: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "10px",
    marginBlockEnd: "-150px",
    backgroundImage: 'url(././Back.png)',
    backgroundRepeat:"no-repeat",
    backgroundSize: "300px",
    marginBlockStart: "20vh",
    marginLeft:"75vh",
    height: "65vh",
    [theme.breakpoints.up("md")]: {
      width: "400px",
    },
    [theme.breakpoints.down("md")]: {
  //  width: "80%",
  //  display: "flex",
  //  zIndex: 1,
  //  marginBlockStart: "30vh",
  //  marginBlockEnd: "450px",
  //  marginLeft:"-230px",
  //  backgroundImage: 'url(././Back.png)',
  //  backgroundRepeat:"no-repeat",
  //  backgroundSize: "80px",
  //  backgroundPosition: "center",
  //  alignItems: "center",
  width: "80%",
  zIndex: 1,
  marginBlockStart: "30vh",
  marginBlockEnd: "25px",
  marginLeft:"-300px",
  backgroundImage: 'url(././Back.png)',
  backgroundRepeat:"no-repeat",
  backgroundSize: "70px",
  alignItems: "center",
    },
  },
  HomeButton: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "10px",
    marginBlockEnd: "-750px",
    backgroundImage: 'url(././Home.png)',
    backgroundRepeat:"no-repeat",
    backgroundSize: "300px",
    marginBlockStart: "20vh",
    marginLeft:"-180px",
    height: "65vh",
    [theme.breakpoints.up("md")]: {
      width: "400px",
    },
    [theme.breakpoints.down("md")]: {
  //  width: "80%",
  //  display: "flex",
  //  zIndex: 1,
  //  marginBlockStart: "30vh",
  //  marginBlockEnd: "440px",
  //  marginLeft:"-100px",
  //  backgroundImage: 'url(././Home.png)',
  //  backgroundRepeat:"no-repeat",
  //  backgroundSize: "80px",
  //  backgroundPosition: "center",
  //  alignItems: "center",
   width: "80%",
   zIndex: 1,
   marginBlockStart: "30vh",
   marginBlockEnd: "10px",
   marginLeft:"-380px",
   backgroundImage: 'url(././Home.png)',
   backgroundRepeat:"no-repeat",
   backgroundSize: "70px",
   alignItems: "center",
    },
  },

  BoardButton: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "10px",
    marginBlockEnd: "-750px",

    marginBlockStart: "20vh",
    marginLeft:"-180px",
    height: "65vh",
    [theme.breakpoints.up("md")]: {
      width: "400px",
    },
    [theme.breakpoints.down("md")]: {
  //  width: "80%",
  //  display: "flex",
  //  zIndex: 1,
  //  marginBlockStart: "30vh",
  //  marginBlockEnd: "440px",
  //  marginLeft:"-100px",
  //  backgroundImage: 'url(././Home.png)',
  //  backgroundRepeat:"no-repeat",
  //  backgroundSize: "80px",
  //  backgroundPosition: "center",
  //  alignItems: "center",
   width: "80%",
   zIndex: 1,
   marginBlockStart: "30vh",
   marginBlockEnd: "10px",
   marginLeft:"-1230px",
   alignItems: "center",
    },
  },

  SettingButton:{
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "10px",
    marginBlockEnd: "-550px",
    backgroundImage: 'url(././done.png)',
    backgroundRepeat:"no-repeat",
    backgroundSize: "300px",
    marginBlockStart: "20vh",
    marginLeft:"85vh",
    height: "65vh",
    [theme.breakpoints.up("md")]: {
      width: "400px",
    },
    [theme.breakpoints.down("md")]: {
  //  width: "80%",
  //  display: "flex",
  //  zIndex: 1,
  //  marginBlockStart: "30vh",
  //  marginBlockEnd: "290px",
   
  //  marginLeft:"360px",
  //  backgroundImage: 'url(././Settings.png)',
  //  backgroundRepeat:"no-repeat",
  //  backgroundSize: "100px",

  //  alignItems: "center",
  width: "80%",
  zIndex: 1,
  marginBlockStart: "30vh",
  marginBlockEnd: "1px",
  marginLeft:"100px",
  backgroundImage: 'url(././Settings.png)',
  backgroundRepeat:"no-repeat",
  backgroundSize: "80px",

    },
  },

  boxContainer:{
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "10px",
    marginBlockEnd: "-750px",
    marginBlockStart: "20vh",
    marginLeft:"-180px",
    height: "65vh",
    [theme.breakpoints.up("md")]: {
      width: "400px",
    },
    [theme.breakpoints.down("md")]: {
   width: "80%",
   zIndex: 1,
   marginBlockStart: "30vh",
   marginBlockEnd: "-250px",
   marginLeft:"30px",
   alignItems: "center",
  },
  },

  HappyButton:{
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "10px",
    marginBlockEnd: "-750px",
    backgroundImage: 'url(././Home.png)',
    backgroundRepeat:"no-repeat",
    backgroundSize: "300px",
    marginBlockStart: "20vh",
    marginLeft:"-180px",
    height: "65vh",
    [theme.breakpoints.up("md")]: {
      width: "400px",
    },
    [theme.breakpoints.down("md")]: {
   width: "80%",
   zIndex: 1,
   marginBlockStart: "30vh",
   marginBlockEnd: "-250px",
   marginLeft:"-150px",
   backgroundImage: 'url(././happy.png)',
   backgroundRepeat:"no-repeat",
   backgroundSize: "90px",
   alignItems: "center",
    },
  },
  SadButton:{
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "10px",
    marginBlockEnd: "-750px",
    backgroundImage: 'url(././Home.png)',
    backgroundRepeat:"no-repeat",
    backgroundSize: "300px",
    marginBlockStart: "20vh",
    marginLeft:"-150px",
    height: "65vh",
    [theme.breakpoints.up("md")]: {
      width: "400px",
    },
    [theme.breakpoints.down("md")]: {
   width: "80%",
   zIndex: 1,
   marginBlockStart: "30vh",
   marginBlockEnd: "-250px",
   marginLeft:"-150px",
   backgroundImage: 'url(././sad.png)',
   backgroundRepeat:"no-repeat",
   backgroundSize: "90px",
   alignItems: "center",
    },
  },
  
  AngryButton:{
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "10px",
    marginBlockEnd: "-750px",
    backgroundImage: 'url(././Home.png)',
    backgroundRepeat:"no-repeat",
    backgroundSize: "300px",
    marginBlockStart: "20vh",
    marginLeft:"-180px",
    height: "65vh",
    [theme.breakpoints.up("md")]: {
      width: "400px",
    },
    [theme.breakpoints.down("md")]: {
   width: "80%",
   zIndex: 1,
   marginBlockStart: "30vh",
   marginBlockEnd: "-250px",
   marginLeft:"-150px",
   backgroundImage: 'url(././angry.png)',
   backgroundRepeat:"no-repeat",
   backgroundSize: "90px",
   alignItems: "center",
    },
  },
  LoveButton:{
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "10px",
    marginBlockEnd: "-750px",
    backgroundImage: 'url(././Home.png)',
    backgroundRepeat:"no-repeat",
    backgroundSize: "300px",
    marginBlockStart: "20vh",
    marginLeft:"-180px",
    height: "65vh",
    [theme.breakpoints.up("md")]: {
      width: "400px",
    },
    [theme.breakpoints.down("md")]: {
   width: "80%",
   zIndex: 1,
   marginBlockStart: "30vh",
   marginBlockEnd: "-250px",
   marginLeft:"-150px",
   backgroundImage: 'url(././love.png)',
   backgroundRepeat:"no-repeat",
   backgroundSize: "90px",
   alignItems: "center",
    },
  },
  
  
}));

export default useStyles;
