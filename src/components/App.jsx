import React, { Component } from "react";
import "../css/App.css";
import Title from "./Title.jsx";
import Game from "./Game.jsx";
import Answers from "./Answers.jsx";
import Sidebar from "./Sidebar.jsx";
// import components

class App extends Component {
  render() {
    return (
      <div className="app">
        <Title />
        <Game />
      </div>
    );
  }
}

export default App;
