// if(something){
//     do something
// } else {
//     do something else
// }

const id = 100;

// // EQUAL TO

// if(id == 101){ // if equal to
//     console.log('CORRECT');
// } else {
//     console.log('INCORRECT');
// }

// // NOT EQUAL TO

// if(id !== 101){ //not equal to
//     console.log('CORRECT');
// } else {
//     console.log('INCORRECT');
// }

// // Equal to value and type
// // SUGGEST USE OF === THREE OF THESE
// if(id === 101){ // if equal to
//     console.log('CORRECT');
// } else {
//     console.log('INCORRECT');
// }


//TEST IF UNDEFINED
// if(type of id !== 'undefined'){
//     console.log(`The ID is ${id}`);
// } else {
//     console.log(`NO ID`);
// }

// GREATOR OR LESS THAN

// if(id > 200){
//     console.log('CORRECT');
// } else {
//     console.log('INCORRECT');
// }

// IF ELSE

const color = 'yellow';

// if(color === 'red'){
//     console.log('Color is red');
// } else if(color ==== 'blue') {
//     console.log('color is blue');
// } else {
//     console.log('Color is not red or blue');
// }

//LOGICAL OPERATORS

const name = 'Steve';
const age = 20;

if(age > 0 && age < 12){
    console.log(`${name} is a child`)
} else if(age >= 13 && age <= 19){
    console.log(`${name} is a teenager`);
} else {
    console.log(`${name} is an adult`);
}

// OR ||
if(age < 16 || age > 65){
    console.log(`${name} cannot run in race`);
} else {
    console.log(`${name} is regustered for the race`)
}

// TERNARY OPERATOR

console.log(id === 100 ? 'CORRECT' : 'INCORRECT');

