import React, { Component } from "react";
import Answers from "./Answers.jsx";
import Question from "./Question.jsx";
import "../css/Game.css";

// import components

class Game extends Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-2" />
					<div className="Game col-md-8">
						<Question text={this.props.currentQuestion.question_text} />
						<Answers
							correctAnswer={this.props.currentQuestion.correct_choice_index}
							answerList={this.props.currentQuestion.choices}
						/>
					</div>
					<div className="col-md-2" />
				</div>
			</div>
		);
	}
}
export default Game;
