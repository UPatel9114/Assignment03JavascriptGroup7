// Students:
// 1]Vilas Desai  -  200522471
// 2]Udaykumar Patel  -  200522548	
// 3]Bishnu Bohora  -  200519767

document.addEventListener("DOMContentLoaded", function () {
    //Creating variables for elements used in html for further use.
    const inputVar = document.getElementById("inputId");  //const for input.
    const addButtonVar = document.getElementById("addButtonId"); //const for add button.
    const listVar = document.getElementById("listId");  //const for the list.
    const dingSound = document.getElementById('dingSound'); // const for the ding sound.

    //Creating a function for the add button to add the To-Do things to the list through input text.
    function addButton() {
      const todoText = inputVar.value.trim();
      if (todoText === "") return; //checks if the input is empty.
      //Creating const to build new elements.
      const li = document.createElement("li");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      const todoTextSpan = document.createElement("span");
      todoTextSpan.textContent = todoText;
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.classList.add("deleteBtn");
      li.appendChild(checkbox);           //appends items to the list. 
      li.appendChild(todoTextSpan);
      li.appendChild(deleteBtn);
      listVar.appendChild(li);
      inputVar.value = "";
    }
  
    //Creating a function for the delete button that removes things from the list.
    function removeButton() {
      const listItem = this.parentNode;
      listItem.remove();
    }
  
    //Creating a function that helps to move the checked items to the bottom of the list.
    function mover() {
      const listItem = this.parentNode;
      listItem.classList.toggle("checked");
      dingSound.play(); // plays the ding sound when the box is checked when an item is completed in to-do list.
      listVar.appendChild(listItem); // Move the checked item to the bottom of the list.
    }

    // Eventlistener for the add button.
    addButtonVar.addEventListener("click", addButton);
    inputVar.addEventListener("keypress", function (event) {
      if (event.key === "Enter") addButton();
    });
  
    //Eventlistener for the list.
    listVar.addEventListener("click", function (event) {
      if (event.target.nodeName === "BUTTON") {
        removeButton.call(event.target);
      } else if (event.target.nodeName === "INPUT") {
        mover.call(event.target);
      }
    });
  });