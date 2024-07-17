import Iframe from "react-iframe";
import logo from "./logo.svg";
import "./App.css";
import React from "react";
import WebView from "./WebView";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WebView url="https://nailapp.theacare.de/nail-classifier" />

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
