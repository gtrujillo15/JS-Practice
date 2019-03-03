const form = document.querySelector(`form`);
const taskInput = document.getElementById(`task`);
const heading = document.querySelector(`h5`);

// Clear Input (take text off after its sent)
taskInput.value = '';

// form.addEventListener(`submit`, runEvent);

//Keydown
taskInput.addEventListener('keydown', runEvent);

//Key Press
taskInput.addEventListener('keypress', runEvent);

//Focus
taskInput.addEventListener('focus', runEvent);

//KeyUp (when you release the key)
taskInput.addEventListener('keyup', runEvent);

function runEvent(){
    console.log(`EVENT TYPE: ${e.type}`);

    console.log(e.target.value);

    // heading.innerText = e.target.value;

    // Get Input Value
    //console.log(taskInput.value);

    e.preventDefault();
}