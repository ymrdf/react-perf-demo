import React, { Component } from "react";
//import { BrowserRouter as Router } from "react-router";
//import { createBrowserHistory as createHistory } from "history";
import { BrowserRouter as Router } from "react-router-dom";
import Container from "../container";
import "./App.css";

class App extends Component {
	render() {
		return (
			<Router>
				<Container />
			</Router>
		);
	}
}

export default App;
