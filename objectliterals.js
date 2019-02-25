const person = {
    firstName: 'Steve',
    lastName: 'Smith',
    age: 30,
    email: 'steve@aol.com',
    hobbies: ['music', sports],
    address: {
        city: 'Miami',
        state: 'Fl'
    },
    getBirthYear: function(){
        return 1987;
    }
}

let val;

val = person;
// Ge specific value
val = person.firstName;
val = person['lastName'];
val = person.age;
val = person.hobbies[1];
vall = person.address.state;

console.log(val);