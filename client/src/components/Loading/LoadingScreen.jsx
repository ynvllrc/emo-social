import React from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, Row, Col, Button } from "antd";
import { Typography, Box, Link } from "@mui/material";
import useStyles from "./style";

const Loading = () => {
  const classes = useStyles();
  const history = useNavigate();

  const handlePlay = () => {
    history("/character/");
    console.log("Play");
  };

  return (
    <div className={classes.body}>
      <Box className={classes.PlayButtons} onClick={handlePlay}></Box>
    </div>
  );
};

export default Loading;
