import React from "react";
import { Form, Input, Row, Col, Button } from "react";

import { Typography, Box, Link } from "@mui/material";
import useStyles from "././style";

const Explore = () => {
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
          marginTop: "-110px",
              
        }}
      >
        <img
          src="./Back.png"
          alt="Back"
          style={{ height: "10%", width: "10%" }}
        />
         <img
          src="./Home.png"
          alt="Home"
         style={{ height: "10%", width: "10%" }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
          marginTop: "-110px",
              
        }}
      >  <img
      src="./Home.png"
      alt="Home"
     style={{ height: "10%", width: "10%",visibility:"hidden" }}
    />
        <img
          src="./Settings.png"
          alt="Settings"
          style={{ height: "10%", width: "15%" }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: "50px",
          margin:"5Spx",
        }}
      >
        <img
              src="./Prev.png"
              alt="Previous"
              style={{ height: "10%", width: "10%" }}
            />
        <img
          src="./Guess1.png"
          alt="Guess"
          style={{ height: "20%", width: "20%" }}
        />
        <img
          src="./Behavior1.png"
          alt="Behavior"
          style={{ height: "20%", width: "20%" }}
        />
        <img
          src="./Good1.png"
          alt="Good"
          style={{ height: "20%", width: "20%" }}
        />
         <img
              src="./Next.png"
              alt="Next"
              style={{ height: "10%", width: "10%", position:"center" }}
            />
      </div>
    </div>
  </div>
);
};


export default Explore;
