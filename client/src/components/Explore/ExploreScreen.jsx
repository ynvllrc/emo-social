
import React from 'react'
 import { Form, Input, Row, Col, Button } from "react";

import { Typography, Box, Link, } from "@mui/material";
import useStyles from "././style";


const Explore = () => {
  
  const classes = useStyles();
  
    return (
      <div className={classes.body}>
         <Box className={classes.NameTag}>
     
       
     <div className={classes.BackButton}>
     </div>
     <div className={classes.HomeButton}>
     </div>

     <div className={classes.SettingButton}>
     </div>
  
     </Box>
     <div className={classes.LeftButton}>
         </div>
        {/* <div className={classes.Talking_with_Friend_Button}>
         </div>  */}
       
         <div className={classes.GuessButton}>
         </div>
          
         <div className={classes.BehaviorButton}>
         </div>

         <div className={classes.GoodButton}>
         </div>
         
         <div className={classes.RightButton}>
         </div>
       
       
      </div>
    
    );
  };
  


export default Explore
