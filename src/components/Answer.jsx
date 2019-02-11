import React, { Component } from "react";
import "../css/Answer.css";

class Answer extends Component {
  render() {
    return (
      <div className="Answer">
        <button
          onClick={() => this.props.handleClick(this.props.answerNumber)}
          type="button"
        >
          {this.props.text}
        </button>
      </div>
    );
  }
}

export default Answer;
