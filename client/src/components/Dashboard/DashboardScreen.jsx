import React from "react";
import { useNavigate } from "react-router-dom";
import useStyles from "././style";

const Dashboard = () => {
  const classes = useStyles();
  const history = useNavigate();

  const handleStory = () => {
    history("/Story/");
  };

  const handleExploreGames = () => {
    history("/Explore/");
  };

  const handleBack = () => {
    history("/");
  };

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
              onClick={() => handleBack()}
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
            gap: "50px",

            marginTop: "10%",
          }}
        >
          <img
            onClick={() => handleStory()}
            src="./Story.png"
            alt="Story"
            style={{ height: "20%", width: "20%" }}
          />
          <img
            onClick={() => handleExploreGames()}
            src="./Explore.png"
            alt="Story"
            style={{ height: "20%", width: "20%" }}
          />
          <img
            src="./Daily.png"
            alt="Story"
            style={{ height: "20%", width: "20%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
