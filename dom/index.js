let header = document.getElementsByTagName("header");

for (let i = 0; i < header.length; i++) {
	header[i].style.fontSize = "50px";
	header[i].style.backgroundColor = "skyblue";
	header[i].style.borderBottom = "solid 1px blue";
	header[i].style.textAlign = "center";
}

const mainContent = document.querySelector(".main");

mainContent.style.border = "solid 1px grey";
mainContent.style.textAlign = "center";

// const itemList = document.querySelector(".list");
// itemList.style.border = "solid 1px lightgrey";

let itemInput = document.querySelector("#item-input");
itemInput.placeholder = "Enter item name";

const submitButton = document.querySelector(".submit-btn");

submitButton.style.backgroundColor = "lightgrey";
submitButton.style.color = "black";

const oddItems = document.querySelectorAll("#item:nth-child(odd)");

oddItems.forEach((item) => (item.style.backgroundColor = "lightgrey"));

const evenItems = document.querySelectorAll("#item:nth-child(even)");
evenItems.forEach((item) => (item.style.backgroundColor = "darkgrey"));

// const list = document.querySelector(".list");
// console.log(list.parentElement);
// console.log(list.parentNode);
// console.log(list.children);
// console.log(list.firstElementChild);
// const firstElementChild = list.firstElementChild;
// console.log(firstElementChild.nextElementSibling)

// creating another element then inserting it in the dom
// before some other element

// creating div

// const newDiv = document.createElement("div");

// // attaching class, id and a new attribute to the new Div element
// newDiv.className = "new-div";
// newDiv.id = "new-div";
// newDiv.setAttribute("title", "new-div");
// const textContent = document.createTextNode("Hello world");

// const body = document.querySelector("body");

// const heading = document.querySelector(".heading");
// console.log(heading);

// body.firstElementChild.insertBefore(textContent, heading);

// learning event listener

const testButton = document.querySelector(".test-btn");
// testButton.addEventListener("click", buttonClicked);
// testButton.addEventListener("dblclick", buttonClicked)
// testButton.addEventListener("mousedown", buttonClicked)
// testButton.addEventListener("mouseup", buttonClicked)

const box = document.querySelector(".box");
// box.addEventListener("mouseenter", buttonClicked)
// box.addEventListener("mouseleave", buttonClicked)
// box.addEventListener("mouseover", buttonClicked)
// box.addEventListener("mouseout", buttonClicked)
box.addEventListener("mousemove", buttonClicked);
const x = document.getElementById("x");
const y = document.getElementById("y");

function buttonClicked(event) {
	// console.log(event);
	// console.log(document.querySelector("button.test-btn.btn"));
	// const output = document.querySelector(".output");
	// output.innerHTML = `<h3>${event.target.classList}</h3>`;
	// console.log(event.altKey)
	// console.log(event.shiftKey)
	// console.log(event.ctrlKey);
	// console.log(event.type);
	// x.innerHTML = event.offsetX;
	// y.innerHTML = event.offsetY;
	// document.body.style.backgroundColor = `rgb(${event.offsetX},${event.offsetY},20)`;
}

// itemInput = document.querySelector('input[type="text"]#item-input');
// // itemInput.addEventListener("keydown", itemInputFunction);
// itemInput.addEventListener("focus", itemInputFunction);
// itemInput.addEventListener("blur", itemInputFunction2);

// function itemInputFunction(event) {
// 	console.log(event.type);
// 	// console.log(event.target.value);
// 	submitButton.style.backgroundColor = "green";
// }

// function itemInputFunction2(event) {
// 	console.log(event.type);
// 	// console.log(event.target.value);
// 	submitButton.style.backgroundColor = "lightgrey";
// }

// const selector = document.querySelector(".selector");

// selector.addEventListener("input", selectorFunction);

// function selectorFunction(event) {
// 	console.log(event.type);
// 	console.log(event.target.value);
// }

const form = document.querySelector(".add-item-form");

form.addEventListener("submit", onSubmit);

function onSubmit(event) {
	event.preventDefault();
	const li = document.createElement("li");

	li.append(
		document.createTextNode(document.querySelector("#item-input").value)
	);
	li.id = "item";

	// creating delete button

	const dltbtn = document.createElement("button");
	dltbtn.className = "delete-item";
	dltbtn.appendChild(document.createTextNode("X"));
	li.appendChild(dltbtn);
	const list = document.querySelector(".list");
	list.appendChild(li);
}

const list = document.querySelector(".list");

list.addEventListener("click", deleteItem);

function deleteItem(event) {
	if (event.target.classList.contains("delete-item")) {
		if (confirm("Are you sure?")) {
			list.removeChild(event.target.parentElement);
		}
	}
}

const filter = document.querySelector(".filter");

filter.addEventListener("keyup", filterItems);

function filterItems(event) {
	const items = document.querySelectorAll("#item");
	const text = event.target.value.toLowerCase();
	items.forEach((item) => {
		if (
			item.firstChild.textContent.toLocaleLowerCase().indexOf(text) != -1
		) {
			item.style.display = "block";
		} else {
			item.style.display = "none";
		}
		
	});
}
