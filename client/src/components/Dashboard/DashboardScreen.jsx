
import React from 'react'
 import { Form, Input, Row, Col, Button } from "react";

import { Typography, Box, Link, } from "@mui/material";
import useStyles from "././style";


const Dashboard = () => {
  
  const classes = useStyles();
  
    return (
      <div className={classes.body}>
          <div style={{ display: "flex", flexDirection: "row", width: "100%", justifyContent:"center", alignItems: "center", margin: "auto", gap: "10px"}}>
         <Box className={classes.NameTag}>
     
       
     <div className={classes.BackButton}>
     </div>
     <div className={classes.HomeButton}>
     </div>

     <div className={classes.SettingButton}>
     </div>
  
     </Box>
   
        <div className={classes.StoryButton}>
         </div>
         <div className={classes.ExploreButton}>
         </div>
         <div className={classes.DailyButton}>
         </div>
      </div>
           
              </div>
    );
  };
  


export default Dashboard
