// REPLACE ELEMENT

// Create ELEMENT
const newHeading = document.createElement('h2');
//Add id
newHeading.id = 'task-title';
//New text node
newHeading.appendChild(document.createTextNode('task-list'));

//Get the old heading
const oldHeading = document.getElementById('task-title');
//Parent
const cardAction = document.querySelecctor('.card-action');

//Replace
cardAction.replaceChild(newHeading, oldHeading);

//Remove Element
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Remove list item
lis[0].remove();

//Remove Child Element
list.removeChild(lis[3]);

// Classes and Attributes
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let val;

// Classes
val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('test');
val = link;

//Attributes
val = link.getAttribute('href');
val = link.setAttribute('href', 'http://google.com');
val = link.hasAttribute('href'); // true
val = link.hasAttribute('title'); //false

console.log(val);