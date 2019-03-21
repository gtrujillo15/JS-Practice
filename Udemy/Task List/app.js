// DEFINE UI VARIABLES
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
    //DOM Load Event
    document.addEventListener('DOMContentLoaded', getTasks);
    
    //Add task event
    form.addEventListener('submit', addTask);

    //Remove Task event
    taskList.addEventListener('click', removeTask);
    //Clear Task Event List
    clearBtn.addEventListener('click', clearTasks);
    // Filter Tasks event
    filter.addEventListener('keyup', filterTasks);
}

// Get Tasks from LS
function getTasks() {
    let tasks;
    if(localStoreage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function(tasks){
        // Create li element
        const li = document.createElement('li');
        // Add class
        li.className = 'collection-item';
        // Create text node and append to li
        li.appendChild(document.createTextNode(taskInput.value));
        // Create new link element (delete button)
        const link = document.createElement('a');
        // Add class
        link.className = 'delete-item   secondary-content';
        // Add icon html
        link.innerHTML = '<i class="far fa-trash-alt"></i>';
        // Append delete link to li
        li.appendChild(link);

        // Append li to ul
    taskList.appendChild(li);

    })

}

// Add Task
function addTask(e) {
    if(taskInput.value === ''){
        alert('Add a task');
    }

    // Create li element
    const li = document.createElement('li');
    // Add class
    li.className = 'collection-item';
    // Create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    // Create new link element (delete button)
    const link = document.createElement('a');
    // Add class
    link.className = 'delete-item secondary-content';
    // Add icon html
    link.innerHTML = '<i class="far fa-trash-alt"></i>';
    // Append delete link to li
    li.appendChild(link);

    // Append li to ul
    taskList.appendChild(li);

    // Store in LS
    storeTaskinLocalStorage(taskInput.value);

    // Clear Input
    taskInput.value = '';
    

    e.preventDefault();
}

// Store Task
function storeTaskinLocalStorage(task){
    let tasks;
    if(localStoreage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Remove Task
function removeTask(e) {
    if(e.target.parentElement.classList.contains('delete-item')) {
        if(confirm('Are You Sure?')) {
         e.target.parentElement.parentElement.remove();
        }
    }
}

// Clear Tasks
function clearTasks(){
    //taskList.innerHTML = ''; CLEARS ALL

    // FASTER METHOD USING A FOR ALL WHILE LOOP
    while(taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }

    //LINK TO HOW BOTH OF THESE METHODS WORK
    // https://jsperf.com/innerhtml-vs-removechild
}

// Filter Tasks
function filterTasks(e) {
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach
    (function(task){
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    })

    console.log(text);
}