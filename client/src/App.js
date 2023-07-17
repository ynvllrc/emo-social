import React, { useRef, useContext, useEffect } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Character from './components/Character/CharacterScreen';
import Loading from './components/Loading/LoadingScreen';
import Dashboard from './components/Dashboard/DashboardScreen';
import Story from './components/Story/StoryScreen';
import Explore from './components/Explore/ExploreScreen';
import Guess from './components/Guess/GuessScreen';
import GuessLevel1 from './components/GuessLevel/Level1';
import { AudioContext } from './Context/AudioContext';
import Story1 from './components/Story/Story1';
// import audioUrl from "./Assets/music.mp3";
// import Audio from "./AudioReusable/Audio";

function App() {
  const audioRef = useRef(null);
  const { isPlaying } = useContext(AudioContext);

  // useEffect(() => {
  //   const audioElement = audioRef.current;

  //   if (isPlaying) {
  //     audioElement.play();
  //   } else {
  //     audioElement.pause();
  //   }
  // }, [isPlaying]);

  return (
    <div className='App'>
      {/* <Audio audioRef={audioRef} audioUrl={audioUrl} /> */}
      <Routes>
        <Route path='/' element={<Loading />} />
        <Route path='/character' element={<Character />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/Story' element={<Story />} />
        <Route path='/Explore' element={<Explore />} />
        <Route path='/Guess' element={<Guess />} />
        <Route path='/guess-emotion-level-1' element={<GuessLevel1 />} />
        <Route path='/Story1' element={<Story1 />} />
      </Routes>
    </div>
  );
}

export default App;
