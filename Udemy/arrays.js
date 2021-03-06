// create some arrays
const numbers = [43, 56, 33, 23, 44, 36, 5];
const numbers2 = new Array(22, 45, 33, 76, 54);
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()];

let val;

// get array length
val = numbers.length;
// check if it is Array
val = Array.isArray(numbers);
// Get single value
val = numbers[3];
val = numbers[0];
// inseert into array
numbers[2] = 100;
// find index of value
val = numbers.indexOf(36);

// mutating arrays
// add onto end
numbers.push(250);
// add onto front
numbers.unshift(120);
// take off from end 
numbers.pop();
// take off from front
numbers.shift();
// splice values
numbers.splice(1,3);
// reverse
numbers.reverse();

// concatenate array
val = numbers.concat(numbers2);

// sorting arrays
val = fruit.sort();
val = numbers.sort();

console.log(numbers);
console.log(val);
