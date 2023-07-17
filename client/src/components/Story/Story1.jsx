import React, { useState } from 'react'
import useStyles from "././style";
import { useSpeechSynthesis } from 'react-speech-kit';
import './Story.css'

const Story1 = () => {
  const classes = useStyles();
  let word = 0;
  const [value, setValue] = useState(0);
  const firstLinesStory = "Once upon a time in a small town called Harmonyville, there were four best friends named Emily, Ethan, Olivia, and Noah. They were known for their strong bond and spent most of their time together, sharing their joys, sorrows, and dreams. They were always there for one another, offering support and understanding whenever needed. One sunny day, as the friends gathered at their favorite spot in the park, they noticed a new girl sitting alone on a nearby bench. Her name was Lily,";

  const { speak } = useSpeechSynthesis()

  const lines = firstLinesStory.split(' ');

  const updateLine = () => {
    const update = () => {
      setValue(word);
      word += 1
      console.log(word)
    }
      setInterval(update, 350)
  }

  return (
    <div className={classes.body}>
      <div className="speech">
        <div className="group">
          <button onClick={() => speak( {text:firstLinesStory, rate: 0.9, pitch: 1.4} ,updateLine())}>Speech</button>
        </div>
        <div className="group">
        </div>
        <div className="group">
          {lines[value]}
        </div>
      </div>
    </div>
  )
}

export default Story1
