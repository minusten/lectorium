var taskInput = document.getElementById("new-task");
var addButton = document.getElementsByTagName("button")[0];
var incompleteTaskHolder = document.getElementById("incomplete-tasks");
var completedTasksHolder = document.getElementById("completed-tasks");
var completedTaskCount = document.getElementsByClassName('count');


var createNewTaskElement=function(taskString){

	var listItem=document.createElement("li");
	var checkBox=document.createElement("input");
	var label=document.createElement("label");
	var editInput=document.createElement("input");
	var editButton=document.createElement("button");
	var deleteButton=document.createElement("button");

	label.innerText=taskString;
	checkBox.type="checkbox";
	editInput.type="text";
	editButton.innerText="Изменить";
	editButton.className="edit";
	deleteButton.innerText="Удалить";
	deleteButton.className="delete";

	listItem.appendChild(checkBox);
	listItem.appendChild(label);
	listItem.appendChild(editInput);
	listItem.appendChild(editButton);
	listItem.appendChild(deleteButton);
	return listItem;
}



var addTask = function() {
	var listItem = createNewTaskElement(taskInput.value);
	incompleteTaskHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskCompleted);
	taskInput.value="";
}
// addButton.onclick = addTask;
addButton.addEventListener("click", addTask);



var editTask = function() {
var listItem = this.parentNode;
var editInput = listItem.querySelector('input[type=text]');
var label = listItem.querySelector("label");
var containsClass=listItem.classList.contains("editMode");

		if(containsClass){
			label.innerText=editInput.value;
		}else{
			editInput.value=label.innerText;
		}
		listItem.classList.toggle("editMode");
}

var deleteTask=function() {
		console.log("Delete Task...");
		var listItem=this.parentNode;
		var ul=listItem.parentNode;
		ul.removeChild(listItem);
}

var taskCompleted=function() {
		console.log("Complete Task...");
	var listItem=this.parentNode;
	completedTasksHolder.appendChild(listItem);
				bindTaskEvents(listItem, taskIncomplete);
}


var taskIncomplete = function(){
		console.log("Incomplete Task...");
		var listItem=this.parentNode;
	incompleteTaskHolder.appendChild(listItem);
			bindTaskEvents(listItem,taskCompleted);
}

var bindTaskEvents = function(taskListItem,checkBoxEventHandler){
	var checkBox=taskListItem.querySelector("input[type=checkbox]");
	var editButton=taskListItem.querySelector("button.edit");
	var deleteButton=taskListItem.querySelector("button.delete");
			editButton.onclick=editTask;
			deleteButton.onclick=deleteTask;
			checkBox.onchange=checkBoxEventHandler;
}


	for (var i = 0; i < incompleteTaskHolder.children.length; i++){
		bindTaskEvents(incompleteTaskHolder.children[i], taskCompleted);
	}

	// var completedTaskCount = function () {
	// if (taskCompleted > 0) {
	// 	completedTaskCount + 1
	// 	console.log(count)
	// 	document.write('completedTaskCount')
	// }
	// }
