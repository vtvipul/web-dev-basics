// const date = require("date-and-time");
import date from "date-and-time";

class DateAndTime {
	constructor(dateStr, timeStr) {
		this.dateTime = this.createDateAndTime(dateStr, timeStr);
	}

	createDateAndTime(dateStr, timeStr) {
		const [y, m, d] = dateStr.split("-").map((s) => parseInt(s));
		const [h, mn] = timeStr.split(":").map((s) => parseInt(s));
		return new Date(y, m, d, h, mn);
	}
}

export class Task {
	constructor(taskText, taskDate, taskTime, reminder) {
		this.id = this.genId();
		this.text = taskText;

		if (taskDate === "") {
			taskDate = date.format(new Date(), "YYYY-MM-DD");
		}

		if (taskTime === "") {
			taskTime = date.format(new Date(), "HH:MM");
		}

		this.day = new DateAndTime(taskDate, taskTime).dateTime;
		this.reminder = reminder;
	}

	genId() {
		return Math.floor(Math.random() * 1000000 + 1);
	}
}

export class TaskDisplay {
	constructor(task) {
		this.id = task.id;
		this.text = task.text;
		this.day = date.format(task.day, "YYYY-MM-DD HH:MM");
		this.reminder = task.reminder;
	}
}
