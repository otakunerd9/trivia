import React, { Component } from "react";
import Answers from "./Answers.jsx";
import Question from "./Question.jsx";
import "../css/Game.css";

// import components

class Game extends Component {
  render() {
    return (
      <div className="Game">
        <Answers answerList={this.props.currentQuestion.choices} />
        <Question text={this.props.currentQuestion.question_text} />
      </div>
    );
  }
}
export default Game;
