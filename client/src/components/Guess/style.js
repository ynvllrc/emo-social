import { makeStyles } from "@mui/styles";
import { createTheme } from "@mui/material/styles";

const theme = createTheme();
const useStyles = makeStyles(() => ({
  body:{
    backgroundImage: 'url(././guess.png)',
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
   width: "100%",
   zIndex: 1,
   marginBlockStart: "30vh",
   marginBlockEnd: "290px",
   marginLeft:"-80px",

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
  marginLeft:"360px",
  backgroundImage: 'url(././Settings.png)',
  backgroundRepeat:"no-repeat",
  backgroundSize: "80px",
  

    },
  },
Level1Button:{
    
      display: "flex",
      alignContent: "center",
      justifyContent: "center",
      alignItems: "10px",
      marginBlockEnd: "-550px",
      backgroundImage: 'url(././Level5.png)',
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
     marginBlockEnd: "100px",
     marginLeft:"-700px",
     backgroundImage: 'url(././Level1.png)',
     backgroundRepeat:"no-repeat",
     backgroundSize: "100px",

     alignItems: "center",
      },
    },
    Level3Button:{
    
      display: "flex",
      alignContent: "center",
      justifyContent: "center",
      alignItems: "10px",
      marginBlockEnd: "-550px",
      backgroundImage: 'url(././The_boy_and_his_bike.png)',
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
     marginBlockEnd: "95px",
     marginLeft:"-30px",
     backgroundImage: 'url(././Level3.png)',
     backgroundRepeat:"no-repeat",
     backgroundSize: "90px",

     alignItems: "center",
      },
    },
    Level2Button:{
    
      display: "flex",
      alignContent: "center",
      justifyContent: "center",
      alignItems: "10px",
      marginBlockEnd: "-550px",
      backgroundImage: 'url(././Talking_with_friends.png)',
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
     marginLeft:"-30px",
     backgroundImage: 'url(././Level2.png)',
     backgroundRepeat:"no-repeat",
     backgroundSize: "90px",
    
     alignItems: "center",
      },
    },
    Level5Button:{
    
      display: "flex",
      alignContent: "center",
      justifyContent: "center",
      alignItems: "10px",
      marginBlockEnd: "-550px",
      backgroundImage: 'url(././Playing_with_friends.png)',
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
     marginLeft:"-20px",
     backgroundImage: 'url(././Level5.png)',
     backgroundRepeat:"no-repeat",
     backgroundSize: "90px",
 
     alignItems: "center",
    
    
      },
    },

    Level4Button:{
    
      display: "flex",
      alignContent: "center",
      justifyContent: "center",
      alignItems: "10px",
      marginBlockEnd: "-550px",
      backgroundImage: 'url(././Playing_with_friends.png)',
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
     marginLeft:"-20px",
     backgroundImage: 'url(././Level4.png)',
     backgroundRepeat:"no-repeat",
     backgroundSize: "90px",

     alignItems: "center",
    
    
      },
    },
    LockButton:{
    
      display: "flex",
      alignContent: "center",
      justifyContent: "center",
      alignItems: "10px",
      marginBlockEnd: "-550px",
      backgroundImage: 'url(././Talking_with_friends.png)',
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
     marginBlockEnd: "-120px",
     marginLeft:"10px",
     backgroundImage: 'url(././Lock.png)',
     backgroundRepeat:"no-repeat",
     backgroundSize: "50px",
    
     alignItems: "center",
      },
    },
    boxContainer:{
      display: "flex",
      alignContent: "center",
      justifyContent: "center",
      alignItems: "10px",
      marginBlockEnd: "-550px",
      marginBlockStart: "20vh",
      marginLeft:"75vh",
      height: "65vh",
      [theme.breakpoints.up("md")]: {
        width: "400px",
      },
      [theme.breakpoints.down("md")]: {
     width: "350%",
    
     zIndex: 1,
     marginBlockStart: "30vh",
     marginBlockEnd: "100px",
     marginLeft:"-380px",
     alignItems: "center",
      },
    },

    StarButton:{
    
      display: "flex",
      alignContent: "center",
      justifyContent: "center",
      alignItems: "10px",
      marginBlockEnd: "-550px",
      backgroundImage: 'url(././Starfill.png)',
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
     marginBlockEnd: "-150px",
     marginLeft:"-80px",
     backgroundImage: 'url(././Starfill.png)',
     backgroundRepeat:"no-repeat",
     backgroundSize: "40px",
    
     alignItems: "center",
      },
    },

    StarnonfillButton:{
    
      display: "flex",
      alignContent: "center",
      justifyContent: "center",
      alignItems: "10px",
      marginBlockEnd: "-550px",
      backgroundImage: 'url(././Starnofill.png)',
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
     marginBlockStart: "50vh",
     marginBlockEnd: "-80px",
     marginLeft:"-80px",
     backgroundImage: 'url(././Starnofill.png)',
     backgroundRepeat:"no-repeat",
     backgroundSize: "40px",
     alignItems: "center",
      },
    },
    

    
}));

export default useStyles;
