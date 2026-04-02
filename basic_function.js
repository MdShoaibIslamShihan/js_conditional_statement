// Basic function of javascript

// with parameter

function greet (name){ //here "name is parameter"
    console.log(`hello! ${name}`);
}
greet('Shihan');

// without parameter

function welcomeMessage() { // No parameters inside ()
  console.log("Welcome to our website!");
}

welcomeMessage(); 

// Parameters, Arguments and return values of function

function ageCheck(age) {
    if (age >= 18) {
        return 'Adult';
    } else {
        return 'Minor';
    }
}
let status = ageCheck(10);
console.log(`satus: ${status}`);

/*
here:
1. age is Parameter
2. 10 is Argument
3. Adult is Return Value
*/


function getFullName (fristname, lastname) {
    return `${fristname} ${lastname}`;
}
let nameOf = getFullName ('Labib', 'Khan');
console.log(`Name: ${nameOf}`);

// Arrow function

        // normal 

function greet (name) {
    return `Hi! ${name}`;
}
let result = greet ("Badol");
console.log(result);

        // arrow

let greetMe = name => `Hey ${name}`;
console.log(greetMe('Rumon'));

let sum = (a, b) => a + b;
console.log(sum(4, 6));