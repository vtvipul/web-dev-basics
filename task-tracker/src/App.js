import { useState } from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

const App = () => {
	const [showAdd, updateShowAdd] = useState(false);
	const [tasks, updateTask] = useState([
		{
			id: 1,
			text: "Doctors Appointment",
			day: "Feb 5th at 2:30pm",
			reminder: true,
		},

		{
			id: 2,
			text: "Meeting at School",
			day: "Feb 6th at 1:30pm",
			reminder: true,
		},

		{
			id: 3,
			text: "Food Shopping",
			day: "Feb 5th at 2:30pm",
			reminder: true,
		},
	]);

	function Delete(id) {
		updateTask(tasks.filter((task) => task.id !== id));
	}

	function ToggleReminder(id) {
		updateTask(
			tasks.map((task) => {
				if (task.id === id) {
					task.reminder = !task.reminder;
				}
				return task;
			})
		);
	}

	function addTask(task) {
		updateTask([...tasks, task]);
	}

	return (
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
				<Tasks tasks={tasks} onDelete={Delete} onToggle={ToggleReminder} />
			) : (
				"No Tasks to display"
			)}
		</div>
	);
};

export default App;
