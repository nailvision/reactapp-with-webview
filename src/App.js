import "./App.css";
import React from "react";
import WebView from "./WebView";

// const URL = "https://nailapp.theacare.de/nail-classifier";
const URL = "http://localhost:3000/camera";

const App = () => {
  const handleWebViewMessage = (message) => {
    console.log("Received message from WebView:", message);
  };

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <WebView url={URL} onMessage={handleWebViewMessage} />
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </div>
  );
};

export default App;
