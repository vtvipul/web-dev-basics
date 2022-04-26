import { useState } from "react";

function AddTask({ onAdd }) {
	const [text, setText] = useState("");
	const [day, setDay] = useState("");
	const [reminder, setReminder] = useState(false);

	function OnSubmit(event) {
		event.preventDefault();
		if (text === "") {
			alert("Cant leave task field empty");
		}
		onAdd({
			text: text,
			day: day,
			reminder: reminder,
		});
		setText("");
		setDay("");
		setReminder("");
	}

	return (
		<form className="add-form" onSubmit={OnSubmit}>
			<div className="form-control">
				<label>Task</label>
				<input
					type="text"
					placeholder="Add Task"
					value={text}
					onChange={(event) => {
						setText(event.target.value);
					}}
				/>
			</div>

			<div className="form-control">
				<label>Date</label>
				<input
					type="text"
					placeholder="Add Date"
					value={day}
					onChange={(event) => {
						setDay(event.target.value);
					}}
				/>
			</div>

			<div className="form-control form-control-check">
				<label>Set Reminder</label>
				<input
					type="checkbox"
					value={reminder}
					onChange={(event) => {
						setReminder(event.currentTarget.checked);
					}}
				/>
			</div>

			<input className="btn btn-block" type="submit" value="Save" />
		</form>
	);
}

export default AddTask;
