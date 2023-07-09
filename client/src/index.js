import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "./index.css";
import App from "./App";
import { AudioProvider } from "./Context/AudioContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AudioProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AudioProvider>
  </React.StrictMode>
);
