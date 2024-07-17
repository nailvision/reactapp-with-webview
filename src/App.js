import Iframe from "react-iframe";
import logo from "./logo.svg";
import "./App.css";
import React from "react";

const WebView = ({ url }) => {
  return (
    <iframe
      src={url}
      style={{ width: "100%", height: "100%", border: "none" }}
      title="WebView"
    />
  );
};

// export default WebView;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WebView url="https://nailapp.theacare.de/nail-classifier" />

        <Iframe
          url="https://nailapp.theacare.de/nail-classifier"
          width="640px"
          height="320px"
          id=""
          className=""
          display="block"
          position="relative"
        />
        {/* <iframe
          src="https://nailapp.theacare.de/nail-classifier"
          // style="border:0px #ffffff none;"
          name="myiFrame"
          // scrolling="no"
          frameBorder="1"
          marginHeight="0px"
          marginWidth="0px"
          height="100%"
          width="100%"
          // allowfullscreen
        ></iframe> */}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
