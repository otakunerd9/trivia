import React, { Component } from "react";
import "../css/App.css";
import Title from "./Title.jsx";
import Game from "./Game.jsx";
import Answers from "./Answers.jsx";
import Sidebar from "./Sidebar.jsx";
import { buildFirebase, getRandomQuestion } from "../clients/firebase";

var firebaseDatabase = buildFirebase();

// import components

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			questions: {},
			currentQuestion: {
				question_text: "Question",
				choices: [],
				correct_choice_index: null
			}
		};
		this.resetQuestion();
	}

	resetQuestion() {
		firebaseDatabase.ref("/questions").on("value", snapshot => {
			let questions = snapshot.val();
			let randomQuestion = getRandomQuestion(questions);
			this.setState({
				questions: questions,
				currentQuestion: randomQuestion
			});
		});
	}

	render() {
		return (
			<div className="app">
				<link
					rel="stylesheet"
					href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
					integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
					crossorigin="anonymous"
				/>
				<Title />
				<button className="butto" onClick={() => this.resetQuestion()}>
					reset
				</button>
				<Game currentQuestion={this.state.currentQuestion} />
			</div>
		);
	}
}

export default App;
