import React, { Component } from "react";
import Answers from "./Answers.jsx";
import Question from "./Question.jsx";
import "../css/Game.css";

// import components

class Game extends Component {
  render() {
    return (
      <div className="Game">
        <Answers />
        <Question />
      </div>
    );
  }
}
export default Game;
