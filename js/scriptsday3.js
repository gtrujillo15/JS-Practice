//Day Three Practice: Setting Values
// Prompt for a number value (provide a default of 10)
var num1 = prompt('Please give me a number from 1 - 10:');
// Prompt for a second number value (provide a default of 10)
var num2 = prompt('Please give me another number from 1 - 10:');
// Convert the prompted values into integers

// Add the numbers together and alert the user with the result
alert('');

//Day Three Practice: 18 and Older
// Asks if the user is over 18
var age = prompt('Are you older than 18 years?');
// If the user is over 18, allow them to proceed, otherwise alert the user that they are not old enough.
function askAge(age) {
  if (age > 18){
    return "Proceed";
  } else {
    return "Sorry, you are not old enough";
  }
}
// Now that all your users at this point are at least 18, ask if they are less than 80 years old.
var age2 = prompt('Are you older than 80 years old?');
// Now ask the users who are between 18 and 80 if they like Star Wars. If they are over 80, ask if they like prunes.

// If they say they don't Star Wars, end the program. In all other cases, alert them with a message.

//Take Home
// Prompts your user for their name.
prompt('What is your name?');
// Next, ask the user's favorite color. (Provide the user with the basic 10 colors as options i.e. red, orange, yellow, green, blue, pink, purple, black, white, and grey).
var color = prompt('What is your favorite color? Please pick from the following: red, orange, yellow, green, blue, pink, purple, black, white, and gray');
// Depending on the color, write 9 different responses for the possible answers. Include the user's name in the response message.
