const taskInput = document.getElementById("task");
const priorityInput = document.getElementById("priority");
const deadlineInput = document.getElementById("deadline");
const addTaskButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");
 
addTaskButton.addEventListener("click", () => {
    const task = taskInput.value;                       //const task
    const priority = priorityInput.value;
    const deadline = deadlineInput.value;
    if (task.trim() === "" || deadline === "") {
        alert("Please select the deadline, after added task")
        return;                                         // Alert
    }
 
    const selectedDate = new Date(deadline);
    const currentDate = new Date();
 
    if (selectedDate <= currentDate) {
        alert("Are you sure ? Deadline is the past.");  // Alert
    
    }

                                                          // Display HTML  
                                                        //${task} is from const task
    const taskItem = document.createElement("div");
    taskItem.classList.add("task");                     
    taskItem.innerHTML = `                              
    <p>${task}</p>                                      
    <p>Priority: ${priority}</p>
    <p>Deadline: ${deadline}</p>
    <button class="mark-done">Mark Done</button>
    <button class="delete">Delete</button>
  `;
 
    taskList.appendChild(taskItem);                     // Display HTML
                                                       
    taskInput.value = "";                               // Make field after added task= "Blank"
    priorityInput.value = "top";        
    deadlineInput.value = "";           
});
 
taskList.addEventListener("click", (event) => {          // Change color after done task
    if (event.target.classList.contains("mark-done")) {
        const taskItem = event.target.parentElement;
        taskItem.style.backgroundColor = "#f2f2f2";
        event.target.disabled = true;
    }
});

taskList.addEventListener("click", (event) => {           // remove item if uncecessary
    if (event.target.classList.contains("delete")) {
        const taskItem = event.target.parentElement;
        taskList.removeChild(taskItem);  
    }
});


