import "./App.css";
import { Routes, Route } from "react-router-dom";
import Character from "./components/Character/CharacterScreen";
import Loading from "./components/Loading/LoadingScreen";
import Dashboard from "./components/Dashboard/DashboardScreen";

import Story from "./components/Story/StoryScreen";
import Explore from "./components/Explore/ExploreScreen";
import Guess from "./components/Guess/GuessScreen";
import Level1page1 from "./components/Level1.page1/Level1.page1Screen";
import Level1page2 from "./components/Level1.page2/Level1.page2Screen";
import Level1page3 from "./components/Level1.page3/Level1.page3Screen";
import Level1page4 from "./components/Level1.page4/Level1.page4Screen";
import Level1page5 from "./components/Level1.page5/Level1.page5Screen";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Loading />} />
        <Route path="/character" element={<Character />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Story" element={<Story />} />
        <Route path="/Explore" element={<Explore />} />
        <Route path="/Guess" element={<Guess />} />
        <Route path="/Level1page1" element={<Level1page1 />} />
        <Route path="/Level1page2" element={<Level1page2 />} />
        <Route path="/Level1page3" element={<Level1page3 />} />
        <Route path="/Level1page4" element={<Level1page4 />} />
        <Route path="/Level1page5" element={<Level1page5 />} />
      </Routes>
    </div>
  );
}

export default App;
