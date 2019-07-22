import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
// import { composeBroast } from "../Actions/actions";

class Broasting extends Component {
	state = {
		choice: "",
		post: ""
	}
	// handleChoiceChange = event => {
	// 	this.setState({
	// 		choice: event.target.value
	// 	});
	// };
	// handlePostChange = event => {
	// 	this.setState({
	// 		post: event.target.value
	// 	});
	// };
	handleChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	};
	handleSubmit = event => {
		const { choice, post } = this.state 
		const lead = {choice, post}
		const conf = {
			method: "post",
			body: JSON.stringify(lead),
			headers: {"Content-Type": "application/json"},
		}
		fetch(conf).then(response => console.log(response))
		this.setState({ choice: "", post: ""});
	};
    render() {
        return (
			<form onClick={this.handleSubmit}>
		   		<h3>Boast or Roast?</h3>
				<select value={this.state.value} required onChange={this.handleChange}>
				{/* <select value={this.state.value} onChange={this.handleChoiceChange}> */}
					<option value="B">Boast</option>
					<option value="R">Roast</option>
				</select>
				<h3>Post</h3>
				<textarea value={this.state.value} required onChange={this.handleChange} />
				{/* <textarea value={this.state.value} onChange={this.handlePostChange} /> */}
				<button type="submit" >Submit</button>
			</form>
        );
    }
}
export default Broasting

// const mapDispatchToProps = dispatch => {
//   return {
//     composeBroast: content => {
//       dispatch(composeBroast(content));
//     }
//   };
// };

// export default connect(
//   null,
//   mapDispatchToProps
// )(Broasting);