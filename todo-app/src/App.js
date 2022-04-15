import Todo from "./components/Todo";

function App() {
	return (
		<div className="maindiv">
			<h1>My Todo</h1>
			<Todo titleName="Learn React" />
			<Todo titleName="Learn graphql" />
		</div>
	);
}

export default App;
