import React, { Component } from "react";
import "../css/Answers.css";
import Answer from "./Answer.jsx";

// import components

class Answers extends Component {
  render() {
    return (
      <div className="Answers">
        <Answer text={this.props.answerList[0]} />
        <Answer text={this.props.answerList[1]} />
        <Answer text={this.props.answerList[2]} />
        <Answer text={this.props.answerList[3]} />
      </div>
    );
  }
}

export default Answers;
