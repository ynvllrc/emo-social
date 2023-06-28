import './App.css';
import { Routes, Route, useNavigate } from "react-router-dom";
import Character from './components/Character/Character';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/character' element={<Character />} />
      </Routes>
    </div>
  );
}

export default App;
