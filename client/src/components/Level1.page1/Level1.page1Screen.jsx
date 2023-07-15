import React, { useState } from "react";
import { Form, Input, Row, Col, Button } from "antd";

import { Typography, Box, Link } from "@mui/material";
import useStyles from "./style";

const Level1page1 = () => {
  const classes = useStyles();
  const [showFinalResults, isCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    {
      level: 1,
      page: 1,
      main: "imagepath",
      options: [
        { id: 0, path: './happy.png', alt: "happy", isCorrect: false },
        { id: 1, path: './love.png', alt: "love", isCorrect: false },
        { id: 2, path: './angry.png', alt: "angry", isCorrect: false },
        { id: 3, path: './sad.png', alt: "sad", isCorrect: true },
      ]
    },
    {
      level: 2,
      page: 2,
      main: "imagepath",
      options: [
        { id: 0, path: './happy.png', alt: "happy", isCorrect: false },
        { id: 1, path: './love.png', alt: "love", isCorrect: true },
        { id: 2, path: './angry.png', alt: "angry", isCorrect: false },
        { id: 3, path: './sad.png', alt: "sad", isCorrect: false },
      ]
    },
    {
      level: 3,
      page: 3,
      main: "imagepath",
      options: [
        { id: 0, path: './happy.png', alt: "happy", isCorrect: false },
        { id: 1, path: './love.png', alt: "love", isCorrect: false },
        { id: 2, path: './angry.png', alt: "angry", isCorrect: true },
        { id: 3, path: './sad.png', alt: "sad", isCorrect: false },
      ]
    },
    {
      level: 4,
      page: 4,
      main: "imagepath",
      options: [
        { id: 0, path: './happy.png', alt: "happy", isCorrect: false },
        { id: 1, path: './love.png', alt: "love", isCorrect: false },
        { id: 2, path: './angry.png', alt: "angry", isCorrect: false },
        { id: 3, path: './sad.png', alt: "sad", isCorrect: true },
      ]
    },
    {
      level: 5,
      page: 5,
      main: "imagepath",
      options: [
        { id: 0, path: './happy.png', alt: "happy", isCorrect: true },
        { id: 1, path: './love.png', alt: "love", isCorrect: false },
        { id: 2, path: './angry.png', alt: "angry", isCorrect: false },
        { id: 3, path: './sad.png', alt: "sad", isCorrect: false },
      ]
    }
  ];

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
        <div style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20%",
        }}>
          <h2 style={{marginBottom: "0"}}>{`Level ${currentQuestion + 1}`}</h2>
          <h5 style={{marginTop: "0"}}>{`Page ${currentQuestion + 1}/5`}</h5>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: "20px",
            // marginTop: "30%",
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

export default Level1page1;
