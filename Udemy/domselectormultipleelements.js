// document.getElementsByClassName

// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[0]);
// items[0].style.color = 'red';
// items[3].textContent = 'Hello';

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
// console.log(listItems);

// document.getElementsByTagName

// let items = document.getElementsByTagName('li');
// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = 'red';
// lis[3].textContent = 'Hello';

// // Convert HTML Collection into Array
// lis = Array.from(lis);

// lis.reverse();

// lis.forEach(function(li, index){
//     console.log(li.className)
//     li.textContent = `${index} Hello`
// });

// console.log(lis);

// document.querySelectorAll

const items = document.querySelectorAll('ul.collection li.collection-item');

items.forEach(function(items, index){
    items.textContent = `${indexx}: Hello`;
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liOdd = document.querySelectorAll('li:nth-child(event)');

liOdd.forEach(function(li, index){
    li.getElementsByClassName.background = '#ccc';
});

for(let i = 0; i < MediaQueryListEvent.length, i++){
    liEven[i].style.background = '#fff';
}

console.log(items);