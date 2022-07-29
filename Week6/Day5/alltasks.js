(function () {

let tasks = JSON.parse(localStorage.getItem("tasks"));

for (let task of tasks) {
	let isCompleted = false;
	
	let div = document.createElement("div");
	document.body.appendChild(div);
	
	let name = document.createElement("h2");
	let textName = document.createTextNode(task["name"]);
	name.appendChild(textName)
	div.appendChild(name)

	let description = document.createElement("h3");
	let textDsc = document.createTextNode(task["description"]);
	description.appendChild(textDsc);

	let start = document.createElement("h3");
	let textStart = document.createTextNode(task["startDate"]);
	name.appendChild(textStart);
	div.appendChild(start);
	
	let end = document.createElement("h3");
	let textEnd = document.createTextNode(task["endDate"]);
	name.appendChild(textEnd);
	div.appendChild(end);

	let descriptionBtn = document.createElement("button");	
	let textDesc = document.createTextNode("See description");
	descriptionBtn.appendChild(textDesc);
	div.appendChild(descriptionBtn);
	descriptionBtn.addEventListener("click", () => div.appendChild(description));


	let deleteBtn = document.createElement("button");
	let textDel = document.createTextNode("Delete the Task");
	deleteBtn.appendChild(textDel);
	div.appendChild(deleteBtn);
	deleteBtn.addEventListener("click", (event) => {
		// storage.removeItem(tasks[tasks.indexOf(task)]);
		if (confirm("are you sure to delete this task?")) {
   			 event.target.parentElement.remove()
  		}
	});

	// let editBtn = document.createElement("button");
	// let textEdit = document.createTextNode("Edit the Task");
	// editBtn.appendChild(textEdit);

	let checkBox = document.createElement("input");
	checkBox.type = "checkbox";
	div.appendChild(checkBox);
	checkBox.addEventListener('change', function() {
		if (this.checked) {
			let isCompleted = true;
		} else {
			let isCompleted = false;
		}
	});

}
})();

