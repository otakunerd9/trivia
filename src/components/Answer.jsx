import React, { Component } from "react";
import "../css/Answer.css";

class Answer extends Component {
	render() {
		return (
			<div className="Answer">
				<button
					onClick={() => this.props.handleClick(this.props.answerNumber)}
					type="button"
					class="btn btn-lg btn-block"
				>
					<font color={this.props.color}>{this.props.text}</font>
				</button>
			</div>
		);
	}
}

export default Answer;
