import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import {
	BrowserRouter as Router,
	Route,
	Routes,
	useLocation,
} from "react-router-dom";
import About from "./components/About";
import Footer from "./components/Footer";

const App = () => {
	const [showAdd, updateShowAdd] = useState(false);
	const [tasks, updateTask] = useState([]);

	useEffect(() => {
		const getTasks = async () => {
			const tasks = await fetchTasks();
			updateTask(tasks);
		};
		getTasks();
	}, []);

	async function fetchTasks() {
		const res = await fetch("http://localhost:5000/tasks");
		const data = await res.json();
		return data;
	}

	async function fetchTask(id) {
		const res = await fetch(`http://localhost:5000/tasks/${id}`);
		const data = await res.json();
		return data;
	}

	async function Delete(id) {
		await fetch(`http://localhost:5000/tasks/${id}`, { method: "DELETE" });
		updateTask(tasks.filter((task) => task.id !== id));
	}

	async function ToggleReminder(id) {
		const taskToUpdate = await fetchTask(id);
		const updatedTask = { ...taskToUpdate, reminder: !taskToUpdate.reminder };
		const res = await fetch(`http://localhost:5000/tasks/${id}`, {
			method: "PUT",
			headers: { "Content-type": "application/json" },
			body: JSON.stringify(updatedTask),
		});
		const data = await res.json();
		updateTask(
			tasks.map((task) => {
				if (task.id === id) {
					return { ...task, reminder: data.reminder };
				} else {
					return task;
				}
			})
		);
	}

	async function addTask(task) {
		const res = await fetch("http://localhost:5000/tasks", {
			method: "POST",
			headers: { "Content-type": "application/json" },
			body: JSON.stringify(task),
		});
		const data = await res.json();

		updateTask([...tasks, data]);
	}

	return (
		<Router>
			<Routes>
				<Route
					path="/"
					element={
						<div className="container">
							<Header
								title="Task Tracker"
								onClick={() => {
									updateShowAdd(!showAdd);
								}}
								buttonTitle={showAdd ? "Cancel" : "Add"}
								buttonColor={showAdd ? "red" : "black"}
							/>
							{showAdd ? <AddTask onAdd={addTask} /> : ""}

							{tasks.length > 0 ? (
								<Tasks
									tasks={tasks}
									onDelete={Delete}
									onToggle={ToggleReminder}
								/>
							) : (
								"No Tasks to display"
							)}
						</div>
					}
				/>

				<Route path="/about" element={<About />} />
			</Routes>
				<Footer></Footer>
		</Router>
	);
};

export default App;
