
import React from 'react'
// import { Form, Input, Row, Col, Button } from "antd";

 import { Typography, Box, Link, Button } from "@mui/material";
import useStyles from "./style";


const Character = () => {
  
  const classes = useStyles();
  
    return (
      <div className={classes.body}>
             <div style={{ display: "flex", flexDirection: "row", width: "100%", justifyContent:"center", alignItems: "center", margin: "auto", gap: "10px"}}>


        <div style={{ display: "flex", flexDirection: "row", width: "300%", justifyContent:"center", alignItems: "center", margin: "auto", gap: "10px"}}>
         <div className={classes.MaleButton}></div>
         </div>

         <div style={{ display: "flex", flexDirection: "row", width: "200%", justifyContent:"center", alignItems: "center", margin: "auto", gap: "10px"}}>
         <div className={classes.DoneButton}></div>
         </div>
       
         <div style={{ display: "flex", flexDirection: "row", width: "100%", justifyContent:"center", alignItems: "center", margin: "auto", gap: "10px"}}>
         <div className={classes.FemaleButton}></div>
          </div>
       
          </div>
          </div>
    );
  };
  


export default Character
