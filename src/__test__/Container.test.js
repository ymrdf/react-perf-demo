import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import Container from "../modules/container";

it("renders without crashing", () => {
	const div = document.createElement("div");
	const app = <MemoryRouter><Container /></MemoryRouter>;
	ReactDOM.render(app, div);
	ReactDOM.unmountComponentAtNode(div);
});
