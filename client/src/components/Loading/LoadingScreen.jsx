import React, { useRef, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import useStyles from "./style";
import { AudioContext } from "../../Context/AudioContext";

const Loading = () => {
  const { setIsPlaying } = useContext(AudioContext);
  const classes = useStyles();
  const history = useNavigate();

  const handlePlay = () => {
    history("/character/");
    setIsPlaying(true);
    console.log("Play");
  };

  return (
    <div className={classes.body}>
      <div style={{marginTop: "250px"}}>
        <img
          src="./Loading/Play.png"
          onClick={handlePlay}
          alt="Play"
          style={{ height: "10%", width: "15%" }}
        />
      </div>
    </div>
  );
};

export default Loading;
