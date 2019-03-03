const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// Click
// clearBtn.addEventListener(`click`, runEvent);
// DoubleClick
// clearBtn.addEventListener(`dblclick`, runEvent);
// Mousedown
clearBtn.addEventListener(`mousedown`, runEvent);
// Mousedown
clearBtn.addEventListener(`mouseup`, runEvent);

//Mouseenter
clearBtn.addEventListener(`mouseenter`, runEvent);

// Mouseleave
clearBtn.addEventListener(`mouseleave`, runEvent);

//Even Handler
function runEvent(e) {
    console.log(`EVENT TYPE: ${e.type}`);
}