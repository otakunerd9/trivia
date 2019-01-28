import React, { Component } from "react";
import "../css/Answer.css";

class Answer extends Component {
  render() {
    return <div class="Answer">{this.props.text}</div>;
  }
}

export default Answer;
