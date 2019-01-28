// Day One
console.log('hello world');
console.log("My name is Gaby and I'm 26 years old.");
console.log("I enjoy learning, helping others, and sometimes baking");
console.log("I hope I can use this repo a lot to help me learn JS");

// Day Two
var firstName = prompt('What is your first name?');
var lastName = prompt('What is your last name?');
console.log(lastName);
alert(lastName);
var birthday = new Date();
var birthday = prompt('When is your birthday?');
confirm(birthday);
alert(birthday);

// Day Three
// Declare a variable and set it equal to any string.
var extra1 = ('hi this is me');

// Declare a second variable and call new String() on the same string (this will create an instance of a JS string object.)
var extra2 = ('hi this is not me');

// Use the logical operators to determine if they are strictly equal.
console.log(extra1 === extra2);

// Now use the logical operators to determine if they are loosely equal.
console.log(extra1 == extra2);

// Why did you get the result you got?
//I wasn't sure what to write for the second string and what the instructions meant, but obviously the results would trun false because the strings are not the same.
