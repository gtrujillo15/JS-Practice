//functions are blocks of code that can defined and called at a later time
//two types of functions
//function declarations & function expressions


//FUNCTION DELCLRATIONS
function greet(firstName, lastName){
    // console.log('Hello');
    return 'Hello' + firstName + ' ' + lastName;
}

// console.log(greet('John', 'Doe'));


// FUNCTION EXPRESSIONS
const square = function(x = 3) {
    return x*x;
};

// console.log(square());


// IMMEDIATELY INVOCABLE FUNCION EXPRESSIONS - IIFEs

// (function() {
//     console.log('IIFE Ran..');
// })();

// PROPERTY METHODS

const todo = {
    add: function(){
        consolelog('Add todo..');
    },
    edit: function(id){
console.log(`Edi todo ${id}`);
    }
}

todo.delete = function(){
    console.log('Delete todo...');
}
todo.add();
todo.edit(22);
todo.delete();