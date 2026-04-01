// .......if statement.......
// used to make decisions in your code. It runs a block of code only when a condition is true.

let age = 32;

if (age >= 18) {
    console.log('you are an adult');
}
// you are an adult

let isRaining = true;

if (isRaining) {
    console.log("Take an umbrella");
}
// Take an umbrella

// .......if...else Statement.......
/*
make decisions between two choices.
If the condition is true → one block runs
If the condition is false → another block runs
*/

let yourAge = 13;

if (yourAge >= 20) {
    console.log("You are ready to go");
} else {
    console.log("You can not go");
}
// You can not go

let isHungry = false;

if (isHungry) {
    console.log("You can have a meal");
} else {
    console.log("Do not need to eat");
}
// Do not need to eat


// ........ if...else if...else  .......
// used when you have multiple conditions and want to check them one by one.

let marks = 62;

if (marks >= 80) {
    console.log("A+");
} else if (marks >= 60) {
    console.log("A");
} else if (marks >= 40) {
    console.log("Pass");
} else {
    console.log("Fail");
}
// A

let num = 0;

if (num > 0) {
    console.log("Positive");
} else if (num < 0) {
    console.log("Negative");
} else {
    console.log(0);
}
// 0

let temperature = 30;

if (temperature > 35) {
    console.log("Very Hot");
} else if (temperature > 25) {
    console.log("Warm");
} else {
    console.log("Cool");
}
// Warm

/*
In JavaScript, logical operators are used to combine or modify conditions. They return Boolean values (true or false) and are very useful in if statements.
*/

//....... Logical And (&&) .......
// used to check multiple conditions at the same time.

let ageOfYou = 23;
let hasId = true;

if (ageOfYou >= 20 && hasId) {
    console.log("You can enter");
}
//You can enter

let username = "Admin";
let password = "12345";

if (username === "Admin" && password === "12345") {
    console.log("Login successful");
}

// ....... Logical OR (||) ........
// used to check multiple conditions, and it returns true if at least one condition is true.

let isWeekend = false;
let isHoliday = true;

if (isWeekend || isHoliday) {
    console.log("You can relax");
}

// ....... Logical NOT (!).......
// used to reverse (invert) a Boolean value.
/*
true ➜ false
false ➜ true
*/

let isRainingNow = false;

if (!isRainingNow) {
  console.log("You can go outside");
}


// Real Life Example

let ageU = 20;
let hasID = true;
let isBanned = false;

if ((ageU >= 18 && hasID) && !isBanned) {
  console.log("Access granted");
} else {
  console.log("Access denied");
}
// Access granted