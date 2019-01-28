import React, { Component } from "react";
import "../css/Answers.css";
import Answer from "./Answer.jsx";

// import components

class Answers extends Component {
  render() {
    return (
      <div className="Answers">
        <Answer text={"YouTube"} />
        <Answer text={"Google"} />
        <Answer text={"Bing"} />
        <Answer text={"Kahoot"} />
      </div>
    );
  }
}

export default Answers;
