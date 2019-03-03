// document.querySelector('.clear-task').addEventListener('click', function(e){
//     console.log('Hello');

//     e.preventDefault();
//     //this will make sure that the console log by making this the default behavior when button is clicked
// });

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e){
    //console.log('Clicked');

    let val;
    val = e;

    //event target element
    val = e.target;
    val = e.target.id;
    val = e.className;
    val = e.target.classList;

    e.target.innerText = 'Hello';

    // Event Type
    val = e.type;

    // Timestamp
    val = e.timeStamp;
    
    // Coords event relative to the window
    val = e.clientY;
    val = e.clientX;

    // Coord event relative to the element
    val = e.offsetY;
    val = e.offsetX;

    console.log(val);
}

