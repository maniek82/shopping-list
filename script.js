var button = document.getElementById("enter");
var input  =document.getElementById("userinput");
var ul = document.querySelector("ul");
var div = document.querySelector("item");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var div = document.createElement("div");
	div.classList.add("item");
	var deleteButton = document.createElement("button");

	deleteButton.setAttribute("class","delete");
	deleteButton.innerHTML ="delete";

	var li = document.createElement("li");
		li.setAttribute("class","todo borderGreen");
		li.appendChild(document.createTextNode(input.value));
		div.appendChild(li);
		div.appendChild(deleteButton);
		ul.appendChild(div);
		input.value = "";

		
}

function addListAfterClick() {
	if(inputLength() > 0) {
		createListElement()
	}
}
function addListAfterKeypress(event) {
	if(inputLength()>0 && event.keyCode===13) {
		createListElement();
	}

}


function toggleDone(event) {
	event.target.classList.toggle("done");
	console.log(event);
}
function addRemoveBorder(event) {
	if(event.target.classList.contains("borderGreen")) {
		event.target.classList.remove("borderGreen");
		event.target.classList.add("borderRed");
		
	}else if(event.target.classList.contains("borderRed")) { 
		 event.target.classList.remove("borderRed");
		 event.target.classList.add("borderGreen");
		}
	
}
function deleteTodo(event) {
	// if (event.target.localName === "button")
	if (event.target.classList.contains('delete')) {
		event.target.parentNode.remove();
	}
}
button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

// li.addEventListener("click", toggleTodoDone);
ul.addEventListener("click",toggleDone);
ul.addEventListener("click", deleteTodo);
ul.addEventListener("click", addRemoveBorder);


