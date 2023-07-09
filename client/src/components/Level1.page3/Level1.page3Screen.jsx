import React from "react";
import { Form, Input, Row, Col, Button } from "antd";

import { Typography, Box, Link } from "@mui/material";
import useStyles from "./style";

const Level1page3 = () => {
  const classes = useStyles();

  return (
    <div className={classes.body}>
      <Box className={classes.NameTag}>
        <div className={classes.BackButton}></div>

        <div className={classes.HomeButton}></div>

        <div className={classes.SettingButton}></div>
      </Box>
      <div className={classes.BoardButton}></div>
      <div className={classes.boxContainer}> </div> {/*  Space */}
      <div className={classes.AngryButton}></div>
      <div className={classes.HappyButton}></div>
      <div className={classes.LoveButton}></div>
      <div className={classes.SadButton}></div>
    </div>
  );
};

export default Level1page3;
