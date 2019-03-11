//event bubbling: the bubbling up of events through the dom. when an event happens, it will bubble up through it's parents.
//event delegation: almost the opposite. when we put the listener on one of the parent elements and use logic inside of the event handler to target the element that we actually want that click/event it is

// EVENT BUBBLING
document.querySelector('.card-title').addEventListener(`click`, function(){
    console.log('card title');
});

document.querySelector('.card-content').addEventListener(`click`, function(){
    console.log('card content');
});

document.querySelector('.col').addEventListener(`click`, function(){
    console.log('.col');
});

// EVENT DELEGATION

// const delItem = document.querySelector('.delete-item');

// delItem.addEventListener('click', deleteItem);

document.body.addEventListener('click', deleteItem);

function deleteItem(e){
//     if(e.target.parentElement.className == 'delete-item' secondary-content){
//         //all class names need to be on there
//         console.log('delete item')

if(e.target.parentElement.classList.contains('delet-item')){
    console.log('delete item');
    e.target.parentElement.parentElement.remove();
}
    }