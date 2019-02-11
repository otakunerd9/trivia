import React, { Component } from "react";
import "../css/Answers.css";
import Answer from "./Answer.jsx";

// import components

class Answers extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      gif: ""
    };
  }
  handleClick(button_clicked) {
    if (button_clicked == this.props.correctAnswer) {
      this.setState({
        gif: "https://giphy.com/embed/WzTIhKfcd9nZm"
      });
    } else {
      this.setState({
        gif: "https://giphy.com/embed/AckmGL4e1i7M4"
      });
    }
  }

  render() {
    return (
      <div className="Answers">
        <Answer
          handleClick={this.handleClick}
          text={this.props.answerList[0]}
          answerNumber={0}
        />
        <Answer
          handleClick={this.handleClick}
          text={this.props.answerList[1]}
          answerNumber={1}
        />
        <Answer
          handleClick={this.handleClick}
          text={this.props.answerList[2]}
          answerNumber={2}
        />
        <Answer
          handleClick={this.handleClick}
          text={this.props.answerList[3]}
          answerNumber={3}
        />
        <iframe
          src={this.state.gif}
          width="280"
          height="360"
          frameBorder="0"
          className="giphy-embed"
          allowFullScreen
        />
      </div>
    );
  }
}

export default Answers;
