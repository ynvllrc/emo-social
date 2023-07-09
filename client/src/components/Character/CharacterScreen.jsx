import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Form, Input, Row, Col, Button } from "antd";

import { Typography, Box, Link, Button } from "@mui/material";
import useStyles from "./style";

const Character = () => {
  const classes = useStyles();
  const history = useNavigate();
  const [boy, setBoy] = useState(false);
  const [girl, setGirl] = useState(false);
  const [gender, setGender] = useState("");

  const onChooseGirl = () => {
    setGirl(true);
    setBoy(false);
    setGender("Girl");
  };

  const onChooseBoy = () => {
    setGirl(false);
    setBoy(true);
    setGender("Boy");
  };

  const onClickDone = () => {
    if (!boy && !girl) {
      window.alert("Please see choose a character");
    } else {
      window.alert(`${gender} character Created`);
      history("/dashboard/");
    }
  };

  return (
    <div className={classes.body}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: "50px",
          marginTop: "100px",
        }}
      >
        <img
          src="./Boy.png"
          alt="image"
          onClick={onChooseBoy}
          style={
            boy
              ? {
                  margin: 0,
                  height: "10%",
                  width: "10%",
                  padding: "5px",
                  border: "1px solid green",
                  borderRadius: "10px",
                }
              : {
                  margin: 0,
                  height: "10%",
                  width: "10%",
                  padding: "5px",
                  borderRadius: "10px",
                  border: "1px solid transparent",
                }
          }
        />
        <img
          src="./Girl.png"
          alt="image"
          onClick={onChooseGirl}
          style={
            girl
              ? {
                  margin: 0,
                  height: "10%",
                  width: "10%",
                  padding: "5px",
                  border: "1px solid green",
                  borderRadius: "10px",
                }
              : {
                  margin: 0,
                  height: "10%",
                  width: "10%",
                  padding: "5px",
                  borderRadius: "10px",
                  border: "1px solid transparent",
                }
          }
        />
      </div>
      <img
        onClick={onClickDone}
        src="./done.png"
        alt=""
        style={{ margin: 0, height: "20%", width: "20%" }}
      />
    </div>
  );
};

export default Character;
