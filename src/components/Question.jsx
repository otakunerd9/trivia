import React, { Component } from "react";
import "../css/Question.css";
// import components

class Question extends Component {
  render() {
    return <div class="Question">{this.props.text}</div>;
  }
}

export default Question;
