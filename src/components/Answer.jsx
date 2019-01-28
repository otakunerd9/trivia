import React, { Component } from "react";
import "../css/Answer.css";

class Answer extends Component {
  render() {
    return (
      <div class="Answer">
        <button type="button">{this.props.text}</button>
      </div>
    );
  }
}

export default Answer;
