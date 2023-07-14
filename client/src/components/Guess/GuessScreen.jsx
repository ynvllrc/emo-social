import React from "react";
import { Form, Input, Row, Col, Button } from "react";

import { Typography, Box, Link } from "@mui/material";
import useStyles from "././style";

const Guess = () => {
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
            marginTop: "-30px",
                
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
       
            marginTop: "10%",
          }}
        >
             <img
            src="./Level1.png"
            alt="Level1"
          
            style={{ height: "15%", width: "15%"}}
          />
          <img
              src="./Level2.png"
            alt="Level2"
            style={{ height: "15%", width: "15%"}}
          />
          <img
               src="./Level3.png"
            alt="Level3"
            style={{ height: "15%", width: "15%"}}
          />
          <img
              src="./Level4.png"
            alt="Level4"
            style={{ height: "15%", width: "15%"}}
          />
             <img
              src="./Level5.png"
            alt="Level5"
          
            style={{ height: "15%", width: "15%"}}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: "95px",
       
            marginTop: "0%",
          }}
        >
             <img
            src="./.png"
            alt=""
          
            style={{ height: "5%", width: "5%"}}
          />
          <img
              src="./Lock.png"
            alt="Lock"
            style={{ height: "5%", width: "5%"}}
          />
          <img
                 src="./Lock.png"
            alt="Lock"
            style={{ height: "5%", width: "5%"}}
          />
          <img
               src="./Lock.png"
            alt="Lock"
            style={{ height: "5%", width: "5%"}}
          />
             <img
               src="./Lock.png"
            alt="Lock"
          
            style={{ height: "5%", width: "5%"}}
          />
        </div>
      </div>
    </div>
  );
};

export default Guess;
