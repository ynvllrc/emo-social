
import React from 'react'
 import { Form, Input, Row, Col, Button } from "react";

import { Typography, Box, Link, } from "@mui/material";
import useStyles from "././style";


const Story = () => {
  
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

       
         <div className={classes.Talking_with_friends_Button}>
         </div>
          
         <div className={classes.The_boy_and_his_bike_Button}>
         </div>

         <div className={classes.Playing_with_friends_Button}>
         </div>
         
         <div className={classes.RightButton}>
         </div>
       
       
      </div>
    
    );
  };
  


export default Story
