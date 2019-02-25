let val;

const today = new Date();
let birthday = new Date('9-10-10081');
birthday = new Date('September 10 1981')
birthday = new Date('9/10/1981');

val = today.getMonth();
val = today.getDate();
val = today.getDay(); //get day of week
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliSeconds();
val = today.getTime(); //amount of seconds that have passsed

birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1985);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(25);

console.log(val);