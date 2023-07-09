import React from "react";
import { Form, Input, Row, Col, Button } from "react";

import { Typography, Box, Link } from "@mui/material";
import useStyles from "././style";

const Guess = () => {
  const classes = useStyles();

  return (
    <div className={classes.body}>
      <Box className={classes.NameTag}>
        <div className={classes.BackButton}></div>
        <div className={classes.HomeButton}></div>

        <div className={classes.SettingButton}></div>
      </Box>
      <div className={classes.Level1Button}>
        <div className={classes.boxContainer}> </div>
        <div className={classes.StarButton}> </div>
        <div className={classes.StarButton}> </div>
        <div className={classes.StarnonfillButton}> </div>
      </div>

      <div className={classes.Level2Button}>
        <div className={classes.LockButton}></div>
        {/* <div className={classes.boxContainer}> </div>  
          <div className={classes.StarButton}> </div>
          <div className={classes.StarButton}> </div>
          <div className={classes.StarnonfillButton}> </div>  */}
      </div>

      <div className={classes.Level3Button}>
        <div className={classes.LockButton}></div>
        {/* <div className={classes.boxContainer}> </div>   Space ito ahh 
          <div className={classes.StarButton}> </div>
          <div className={classes.StarButton}> </div>
          <div className={classes.StarnonfillButton}> </div>  */}
      </div>

      <div className={classes.Level4Button}>
        <div className={classes.LockButton}></div>
      </div>

      <div className={classes.Level5Button}>
        <div className={classes.LockButton}></div>
      </div>
    </div>
  );
};

export default Guess;
