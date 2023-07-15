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
            marginTop: "-80px",
          }}
        >
          <div
            style={{
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
              style={{ height: "25%", width: "30%" }}
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
            src="./Prev.png"
            alt="Prev"
            style={{ height: "10%", width: "10%", marginTop: "5%" }}
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
            style={{ height: "10%", width: "10%", marginTop: "5%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Explore;
