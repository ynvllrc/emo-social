import React from "react";
import { Form, Input, Row, Col, Button } from "antd";

import { Typography, Box, Link } from "@mui/material";
import useStyles from "./style";

const Level1page3 = () => {
  const classes = useStyles();

  return (
    <div className={classes.body}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
                 }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            marginTop: "20px",
                
          }}
        >
          <div style={{
            marginLeft: "-40px",
            marginTop: "-30px",
                
          }}
        >
          <img
            src="./Back.png"
            alt="Back"
            style={{ height: "30%", width: "30%" }}
            
          />
          
           <img
            src="./Home.png"
            alt="Home"
            
           style={{ height: "25%", width: "30%"   }}
          />
        </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
           
            marginTop: "-80px",
            marginLeft: "90%",
                
          }}
        >

          <img
            src="./Settings.png"
            alt="Settings"
            style={{ height: "90%", width: "95%" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: "20px",
            marginTop: "30%",
            marginLeft:"8%",
          }}
        >
             <img
            src="./happy.png"
            alt="Happy"
          
            style={{ height: "13%", width: "13%"}}
          />
          <img
              src="./love.png"
            alt="Love"
            style={{ height: "13%", width: "13%"}}
          />
          <img
               src="./angry.png"
            alt="Angry"
            style={{ height: "13%", width: "13%"}}
          />
          <img
              src="./sad.png"
            alt="Sad"
            style={{ height: "13%", width: "13%"}}
          />
            
        </div>
      
      </div>
    </div>
  );
};

export default Level1page3;
