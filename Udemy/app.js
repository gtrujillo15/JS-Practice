//Template Literals ES6
const name = 'Gaby';
const age = 27;
const job = 'Web Developer';
const city = 'Fresno';
let html;

// Without template strings - ES5
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age +'</li><li>'+ job+ '</li><li>'+ city +'</li></ul>';


// with template strings es6
html = `
<ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
</ul>
`;

document.body.innerHTML = html;