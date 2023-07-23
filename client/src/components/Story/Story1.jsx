import React, { useState } from "react";
import useStyles from "././style";
import { useSpeechSynthesis } from "react-speech-kit";
import "./Story.css";

const Story1 = () => {
  const classes = useStyles();
  const [part, setPart] = useState(1);
  let word = 0;
  const [value, setValue] = useState(0);
  // const firstLinesStory = "Once upon a time in a small town called Harmonyville, there were four best friends named Emily, Ethan, Olivia, and Noah. They- were known for their strong bond and spent most of their time together, sharing their joys,- sorrows, and dreams. They were always there for one another, offering support- and understanding whenever needed. One sunny day, as the friends gathered at- their favorite spot in the park. They noticed a new girl sitting alone on a nearby bench,- her name was Lily,";
  // const firstLinesStory = "Emily approached Lily with a warm smile. Emily soon discovered that Lily had recently moved to Harmonyville and was struggling to make friends.- She missed her old home and felt lonely in the new town."

  // const firstLinesStory = "Seeing the opportunity to help, Emily invited Lily to join their friend group. Lily hesitated at first, but her heart was touched- by Emily's kindness, and she agreed. The next day, Emily introduced Lily- to Ethan, Olivia, and Noah. Although the friends welcomed Lily,- they were cautious about letting her into their tight-knit circle. They worried that her presence- might disrupt the harmony they had built over the years. However, they decided- to give her a chance. As days turned into weeks, Lily started spending more- time with the group. "
  const firstLinesStory = "She would often share stories about her previous town and her adventures, and everyone enjoyed listening. However, over time, Ethan began- to feel left out. Lily and Emily's friendship seemed to overshadow their bond,- and he started feeling replaced."
  const { speak } = useSpeechSynthesis();

  const lines = firstLinesStory.split("- ");

  const updateLine = () => {
    const update = () => {
      setValue(word);
      word += 1;
      console.log(word);
    };
    setInterval(update, 5200);
  };

  return (
    <div className={classes.body}>
      <div className="speech">
        {part === 1 ? (
          <div className="group">
            <div className="group-item">
              <img
                src="./Story/Talking_with_friends.png"
                alt="Friends"
                style={{ height: "30%", width: "30%" }}
              />
              <img
                onClick={() => speak(
                  { text: firstLinesStory, rate: 0.75, pitch: 1.4 },
                  updateLine(),setPart(2)
                )}
                src="./Loading/Play.png"
                alt="Play"
                style={{ height: "10%", width: "15%" }}
              />
            </div>
          </div>
        ) : part === 2 ? (
          <div className="group-item-two">
              <p>{lines[value]}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Story1;
