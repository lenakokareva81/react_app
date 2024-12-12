//декларативный?
import logo from "./logo.svg";
import "./App.css";

export const App = () => {
	let dateNow = new Date();
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				{/* императивный */}
				{/* декларативный */}

				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<p>{dateNow.getFullYear().toString()}</p>
			</header>
		</div>
	);
};

export default App;
