const color = 'red';

switch(color){
    case 'red':
    console.log('Color is red');
    break;
    case 'blue':
    console.log('Color is blue');
    break;
    default:
    console.log('Color is not red or blue');
    break;
}

/* use switch when you have a lot of different cases, instead of using the if statements */

let day:

switch(new Date().getDay()){
    case 0;
    day = 'Sunday';
    break;
    case 1;
    day = 'Monday';
    break;
    case 2;
    day = 'Tuesday';
    break;
    case 0;
    day = 'Wednesday';
    break;
    case 0;
    day = 'Thursday';
    break;
    case 0;
    day = 'Friday';
    break;
    case 0;
    day = 'Saturday';
    break;
}

console.log(`Today is ${day}`);