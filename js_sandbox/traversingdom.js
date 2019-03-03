let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

// Get child nodes

val = list.childNodes;
//will return nodes

val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType;

//Get children element nodes
val = list.children;
//return html collection
val = list.children[1];
list.children[1].textContent = 'Hello';
//Children of children
val = list.children[3].children[0];

// First Child
val = list.firstChlid;
//but this gave us a text node
val = list.firstElementChild;
//this will give us the html element

//Last Child
val = list.lastChild;
val = list.lastElementChild;

// Count child elements
val = list.childElementCount;

// Get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// Get next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling;

// Get Previous sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;

console.log(val);