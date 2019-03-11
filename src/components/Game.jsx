import React, { Component } from "react";
import Answers from "./Answers.jsx";
import Question from "./Question.jsx";
import "../css/Game.css";

// import components

class Game extends Component {
	render() {
		return (
			<div class="Game col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
				<Question text={this.props.currentQuestion.question_text} />
				<Answers
					correctAnswer={this.props.currentQuestion.correct_choice_index}
					answerList={this.props.currentQuestion.choices}
				/>
			</div>
		);
	}
}
export default Game;
