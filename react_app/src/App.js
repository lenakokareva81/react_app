//декларативный?
import logo from "./logo.svg";
import "./App.css";
import { createElement } from "react";

export const App = () => {
	let dateNow = new Date();
	let yearNow = dateNow.getFullYear().toString();
	return createElement(
		"div",
		{ className: "div" },
		createElement(
			"header",
			{ className: "App-header" },
			createElement("img", {
				className: "App-logo",
				src: logo,
				alt: "logo",
			}),
			createElement(
				"a",
				{
					className: "App-link",
					href: "https://reactjs.org",
					target: "_blank",
					rel: "noopener noreferrer",
				},
				"Learn React",
			),
			createElement("p", null, yearNow),
		),
	);
};

export default App;
