var button = document.getElementById("enter");
var input  =document.getElementById("userinput");
var ul = document.querySelector("ul");
var div = document.querySelector("item");
var resetButton = document.querySelector(".reset");
var itemsToBuyArray = window.localStorage.getItem("itemsToBuy") ? JSON.parse(window.localStorage.getItem("itemsToBuy")) : [];

window.localStorage.setItem('itemsToBuy', JSON.stringify(itemsToBuyArray));

var itemsToLoadOnWebsite = JSON.parse(window.localStorage.getItem("itemsToBuy"));


function inputLength() {
	return input.value.length;
}

function addItemToLocalStorate() {
	window.itemsToBuyArray.push(input.value);
  window.localStorage.setItem("itemsToBuy", JSON.stringify(itemsToBuyArray));
}

itemsToLoadOnWebsite.forEach(function(item) {
	
})

function domElementMaker(text) {
	
  var div = document.createElement("div");
	div.classList.add("item");
	var deleteButton = document.createElement("button");

	deleteButton.setAttribute("class","delete");
	deleteButton.innerHTML ="delete";
	
	var li = document.createElement("li");
		li.setAttribute("class","todo borderGreen");
		li.appendChild(document.createTextNode(text));
		div.appendChild(li);
		div.appendChild(deleteButton);
		ul.appendChild(div);
}

function createListElement() {
		
		addItemToLocalStorate();
		domElementMaker(input.value)
		input.value = "";
}

//POPULATE WEBSITE WITH LOCALSTORAGE ITEMS

itemsToLoadOnWebsite.forEach(item => {
  domElementMaker(item);
});

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
		itemsToBuyArray.forEach(function(item) {
			if( event.target.parentNode.firstElementChild.innerHTML==item) {
			   window.localStorage.removeItem(item);
			   itemsToBuyArray = window.localStorage.getItem("itemsToBuy") ? JSON.parse(window.localStorage.getItem("itemsToBuy")) : [];
			   	// var itemsToBuyArrayUpated= JSON.parse(window.localStorage.getItem("itemsToBuy"));
			}
		});
		event.target.parentNode.remove();
	}
}

function clearLocalStorage() {
	 
  window.localStorage.clear();
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
};

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

// li.addEventListener("click", toggleTodoDone);
ul.addEventListener("click",toggleDone);
ul.addEventListener("click", deleteTodo);
ul.addEventListener("click", addRemoveBorder);
resetButton.addEventListener('click', clearLocalStorage);

