let form = document.getElementById("form");

let allTasks = JSON.parse(localStorage.getItem("tasks")) || [];

const addTask = (e) => {
	e.preventDefault();

	let name = document.getElementById("name").value;
	let description = document.getElementById("description").value;
	let startDate = document.getElementById("start").value;
	let endDate = document.getElementById("end").value;

	if (name != "" && description != "" && startDate != "" && endDate != "") {
		
		let objectTask = {
			name : name,
			description : description,
			startDate : startDate,
			endDate : endDate
		}

		allTasks.push(objectTask);

		localStorage.setItem("tasks", JSON.stringify(allTasks));
	}
}

form.addEventListener("submit", addTask);

