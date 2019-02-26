// repeats until a goal is reached
// for, while, forwhile

// FOR LOOP
// for(let i = 0; i < 10; i++){
//     //console.log(i);
//     if(i === 2){
// console.log('2 is my fvorite number');
// continue; //go with the next iteration in loop

// if(i == 5){
//     console.log('STOP THE LOOP');
//     break;
// }
//     }

//     console.log('Number' + 1);
// }

// YOU CAN USE A FOR LOOP GENERALLY WHEN YOU KNOW HOW MANY ITERATIONS YOU NEED (BUT THERE IS PLENTY OF GREY AREA )

// WHILE LOOP

// let i = 0;

// while(i < 10){
//     console.log('Number ' + i);
//     i++;
// }

// DO WHILE
let i = 0;
do {
    console.log('Number ' + i);
    i++;
}

while(i < 10);

//THIS IS ALWAYS GOING TO RUN ONCE NO MATTER WHAT

// LOOP THROUGH ARRAY
const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];
cars[1];

// for(let i = 0; i < cars.length, i++){
//     console.log(i);
// }

// cars.forEach(function(car){
//     console.log(car);
// });

// MAP
// const users = [
// [   {id:1, name: 'John'},
//     {id: 2, name: 'Sara'},
//     {id: 3, name: 'Karen'},
// ]

// const ids = users.map(function(user)[
//     return user.id
// ]);
// console.log(ids);


// FOR IN LOOP 

const user = {
    firstName: 'Jon',
    lastName: 'Doe',
    age: 40
}

for(let x in user){
    console.log(`${x} : ${user[x]}`);
}