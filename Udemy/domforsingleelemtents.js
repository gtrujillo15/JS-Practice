//jquery used to be used for dom selection but vanilla JS can do it now and it's good

// document.getElementById()

console.log(document.getElementById('task-title'));

// Get things from the element

console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);

const taskTitle = document.getElementById('task-title');


// Change styling 
document.getElementById("task-title").style.background = '#333';
document.getElementById("task-title").style.color = '#fff';
document.getElementById("task-title").style.padding = '5px';

//if you click a button, hovering, or for an event, not for styling (use css for that)
document.getElementById("task-title").style.display = 'none';

// Change content
document.getElementById("task-title").textContent= 'Task List';
document.getElementById("task-title").innerText = 'My Tasks';
document.getElementById("task-title").innerHTML = '<span style="color:red">Task List</span>';

// document.querySelector()

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.task-title'));
console.log(document.querySelector('h5'));