import { makeStyles } from "@mui/styles";
import { createTheme } from "@mui/material/styles";

const theme = createTheme();
const useStyles = makeStyles(() => ({
  body:{
    backgroundImage: 'url(././background.png)',
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
    marginBlockEnd: "100px",
  
    backgroundRepeat:"no-repeat",
    backgroundSize: "300vh",
    marginBlockStart: "20vh",
    marginLeft:"85vh",
    height: "65vh",
    [theme.breakpoints.up("md")]: {
      width: "400px",
    },
    [theme.breakpoints.down("md")]: {
   width: "250%",
  
   zIndex: 1,
   marginBlockEnd: "100px",
   alignItems: "center",
   justifyContent: "center",
    },
  },


  BackButton: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "10px",
    marginBlockEnd: "-550px",
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
 
  width: "80%",
  zIndex: 1,
  marginBlockStart: "30vh",
  marginBlockEnd: "300px",
  marginLeft:"-300px",

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
    marginLeft:"-580px",
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
   marginBlockEnd: "290px",
   marginLeft:"-375px",

   backgroundRepeat:"no-repeat",
   backgroundSize: "70px",
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

  width: "80%",
  zIndex: 1,
  marginBlockStart: "30vh",
  marginBlockEnd: "270px",
  marginLeft:"90px",
  backgroundImage: 'url(././Settings.png)',
  backgroundRepeat:"no-repeat",
  backgroundSize: "80px",
  

    },
  },

  StoryButton:{
    
      display: "flex",
      alignContent: "center",
      justifyContent: "center",
      alignItems: "10px",
      marginBlockEnd: "-550px",
      backgroundImage: 'url(././Story.png)',
      backgroundRepeat:"no-repeat",
      backgroundSize: "300px",
      marginBlockStart: "20vh",
      marginLeft:"75vh",
      height: "65vh",
      [theme.breakpoints.up("md")]: {
        width: "400px",
      },
      [theme.breakpoints.down("md")]: {
     width: "80%",
    
     zIndex: 1,
     marginBlockStart: "30vh",
     marginBlockEnd: "90px",
     marginLeft:"-1000px",
     backgroundImage: 'url(././Story.png)',
     backgroundRepeat:"no-repeat",
     backgroundSize: "170px",
    
     alignItems: "center",

      },
    },
    DailyButton:{
    
      display: "flex",
      alignContent: "center",
      justifyContent: "center",
      alignItems: "10px",
      marginBlockEnd: "-550px",
      backgroundImage: 'url(././Daily.png)',
      backgroundRepeat:"no-repeat",
      backgroundSize: "300px",
      marginBlockStart: "20vh",
      marginLeft:"75vh",
      height: "65vh",
      [theme.breakpoints.up("md")]: {
        width: "400px",
      },
      [theme.breakpoints.down("md")]: {
     width: "80%",
     display: "flex",

     zIndex: 1,
     marginBlockStart: "30vh",
     marginBlockEnd: "90px",
     marginLeft:"-50px",
     backgroundImage: 'url(././Daily.png)',
     backgroundRepeat:"no-repeat",
     backgroundSize: "170px",
 

     alignItems: "center",
      },
    },
    ExploreButton:{
    
      display: "flex",
      alignContent: "center",
      justifyContent: "center",
      alignItems: "10px",
      marginBlockEnd: "-550px",
      backgroundImage: 'url(././Explore.png)',
      backgroundRepeat:"no-repeat",
      backgroundSize: "300px",
      marginBlockStart: "20vh",
      marginLeft:"75vh",
      height: "65vh",
      [theme.breakpoints.up("md")]: {
        width: "400px",
      },
      [theme.breakpoints.down("md")]: {
     width: "80%",
    
     zIndex: 1,
     marginBlockStart: "30vh",
     marginBlockEnd: "90px",
     marginLeft:"-50px",
     backgroundImage: 'url(././Explore.png)',
     backgroundRepeat:"no-repeat",
     backgroundSize: "170px",
 
     alignItems: "center",
    
    
      },
    },

}));

export default useStyles;
