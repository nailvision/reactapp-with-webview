import "./App.css";
import React, { useState } from "react";
import WebView from "./WebView";

// const URL = "<THEACARE_URL>/camera";
const URL = "http://localhost:3000/camera";

const App = () => {
  const [image, setImage] = useState(null);
  const handleWebViewMessage = (message) => {
    if (!message?.imageDataUrl) {
      console.log("Received a message without imageDataUrl");
      return;
    }
    setImage(message.imageDataUrl);
    console.log(
      "Received imageObj from WebView:",
      message.width,
      message.height,
      message.imageDataUrl.slice(0, 20)
    );
  };

  return (
    <div style={{ width: "100%", height: "50vh" }}>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      {image && (
        <img
          src={image}
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      )}
      {!image && <WebView url={URL} onMessage={handleWebViewMessage} />}
    </div>
  );
};

export default App;
