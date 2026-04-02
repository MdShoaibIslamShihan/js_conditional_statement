// A function expression in JavaScript is a way to define a function and store it inside a variable.

let greet = function() {
    console.log("Hello! friend");
}

greet();    // greet is a variable, The function is assigned to that variable

let add = function (x, y) {
    return x + y;
};

console.log(add(5, 3));

// An anonymous function in JavaScript is a function without a name. It is usually used where a function is needed temporarily or assigned to a variable.
// An anonymous function = function without a name

let wellcome = function() {
    console.log("Welcome home! brother");
}

wellcome();


// A callback function in JavaScript is a function that is passed as an argument to another function and is executed later.

function sayGreet(name, callback) {
    console.log("Hello " + name);
    callback();
}

function sayBye() {
    console.log("Goodbye!");
}

sayGreet("Shihan", sayBye);

setTimeout(function() {
    console.log("Runs after 2 seconds");
}, 2000);

/*
You order food (main function)
You give your phone number (callback)
Restaurant calls you when food is ready
*/