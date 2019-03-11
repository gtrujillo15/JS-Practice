// document.getElementbyId()

console.log(document.getElementById('task-title'));

// Get things from the element
console.log(document.getElementById('task-title').id);

// Change Styling
document.getElementById('task-title').style.background = '#333';
document.getElementById('task-title').style.color = '#fff';
document.getElementById('task-title').style.display = 'none';

//use this for events or when you click a button, implementing events, hovering over something, for dynamic functionality, not to style (use css for that)

// Change Content
console.log(document.getElementById('task-title').textContent);

// document.querySelector()

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));
//this is going to pick the first h5, if you have more than one, you'll want to use nth-child

document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue';

document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(3)').style.color = 'yellow';
document.querySelector('li:nth-child(4)').textContent = 'Hello Word';
document.querySelector('li:nth-child(odd)').style.background = '#ccc';