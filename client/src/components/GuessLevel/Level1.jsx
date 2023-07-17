import React, { useState } from "react";
import { Form, Input, Row, Col, Button } from "antd";

import { Typography, Box, Link } from "@mui/material";
import useStyles from "./style";

const GuessLevel1 = () => {
  const classes = useStyles();
  const [showFinalResults, setShowFinalResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    {
      level: 1,
      page: 1,
      main: "./page1.png",
      options: [
        { id: 0, path: "./happy.png", alt: "happy", isCorrect: false },
        { id: 1, path: "./love.png", alt: "love", isCorrect: false },
        { id: 2, path: "./angry.png", alt: "angry", isCorrect: false },
        { id: 3, path: "./sad.png", alt: "sad", isCorrect: true },
      ],
    },
    {
      level: 2,
      page: 2,
      main: "./page2.png",
      options: [
        { id: 0, path: "./happy.png", alt: "happy", isCorrect: false },
        { id: 1, path: "./love.png", alt: "love", isCorrect: true },
        { id: 2, path: "./angry.png", alt: "angry", isCorrect: false },
        { id: 3, path: "./sad.png", alt: "sad", isCorrect: false },
      ],
    },
    {
      level: 3,
      page: 3,
      main: "./page3.png",
      options: [
        { id: 0, path: "./happy.png", alt: "happy", isCorrect: false },
        { id: 1, path: "./love.png", alt: "love", isCorrect: false },
        { id: 2, path: "./angry.png", alt: "angry", isCorrect: true },
        { id: 3, path: "./sad.png", alt: "sad", isCorrect: false },
      ],
    },
    {
      level: 4,
      page: 4,
      main: "./page4.png",
      options: [
        { id: 0, path: "./happy.png", alt: "happy", isCorrect: false },
        { id: 1, path: "./love.png", alt: "love", isCorrect: false },
        { id: 2, path: "./angry.png", alt: "angry", isCorrect: false },
        { id: 3, path: "./sad.png", alt: "sad", isCorrect: true },
      ],
    },
    {
      level: 5,
      page: 5,
      main: "./page5.png",
      options: [
        { id: 0, path: "./happy.png", alt: "happy", isCorrect: true },
        { id: 1, path: "./love.png", alt: "love", isCorrect: false },
        { id: 2, path: "./angry.png", alt: "angry", isCorrect: false },
        { id: 3, path: "./sad.png", alt: "sad", isCorrect: false },
      ],
    },
  ];

  const optionClicked = (isCorrect) => {
    console.log(isCorrect)
    if(isCorrect) {
      setScore(score + 1)
    }
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowFinalResults(true);
    }
  }

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
            marginTop: "15%",
          }}
        >
          <div
            style={{
              marginLeft: "-40px",
              marginTop: "-200px",
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
              style={{ height: "30%", width: "30%" }}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",

            marginTop: "-120px",
            marginLeft: "90%",
          }}
        >
          <img
            src="./Settings.png"
            alt="Settings"
            style={{ height: "90%", width: "95%" }}
          />
        </div>
        {showFinalResults ? (
          <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "60%",
            height: "10%",
            backgroundColor: "lightgray",
            marginLeft: "20%",
            borderRadius: "10%",
            borderWidth: "10%",
            borderColor: "black",
            marginTop: "3%",
            borderBottom: `2px solid #777777`
           
            
          }}>
            <h5 style={{ marginBottom: "0" }}>{`SUCCESSFUL ${score}/5`}</h5>
            <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: "60%",
            gap: "10%",
            marginLeft: "1%",
            marginTop: "1%",
          }}>
            <img
              src="./Starfill.png"
              alt="Starnofill"
              style={{ height: "15%", width: "15%" }}
            />
              <img
              src="./Starfill.png"
              alt="Starnofill"
              style={{ height: "15%", width: "15%" }}
            />
              <img
              src="./Starnofill.png"
              alt="Starnofill"
              style={{ height: "15%", width: "15%" }}
            />
            </div>
            <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            gap: "10%",
            marginLeft: "1%",
            marginTop: "-5%",
          }}>
            <h5 style={{ marginBottom: "0" }}> New Achievement Unlock – Guess Emotion Easy</h5>
            <img
              src="./Achievements.png"
              alt="Achievements"
              style={{ height: "12%", width: "12%" }}
            />
            </div>
 <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: "60%",
            height: "10%",
            marginLeft: "1%",
            marginTop: "-10%",
           gap: "0%",
          }}>
            <img
              src="./Proceedtolevelmenu.png"
              alt="Proceedtolevelmenu"
              style={{ height: "60%", width: "50%" }}
            />
              <img
              src="./Regame.png"
              alt="Regame"
              style={{ height: "60%", width: "55%" }}
            />
              <img
              src="./Proceedtonextlevelbutton.png"
              alt="Proceedtonextlevelbutton"
              style={{ height: "60%", width: "50%" }}
            />
            </div>
      
           
          </div>
        ) : (
          <>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "-5%",
              }}
            >
              <h2 style={{ marginBottom: "0"}}>{`Level ${
                currentQuestion + 1
              }`}</h2>
              <h5 style={{ marginTop: "0" }}>{`Page ${
                currentQuestion + 1
              }/5`}</h5>
            </div>
            <div>
              <img style={{ height: "20%", width: "20%"}} src={questions[currentQuestion].main}/>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                gap: "20px",
              }}
            >
              {questions[currentQuestion].options.map((option) => {
                return (
                  <>
                    <img
                      onClick={() => optionClicked(option.isCorrect)}
                      key={option.id}
                      src={option.path}
                      alt={option.alt}
                      style={{ height: "13%", width: "13%" }}
                    />
                  </>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default GuessLevel1;
