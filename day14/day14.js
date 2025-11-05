import someFunction from "./someFunction";

someFunction();

// ? ternary operator

// complex ternary operator with nested ternary operator
let num = 10;
let result = num > 0 ? (num % 2 === 0 ? "Even" : "Odd") : "Invalid";
console.log(result);

// ternary operator with multiple conditions
let score = 85;
let grade = score >= 90 ? "A" : score >= 80 ? "B" : "C";
console.log(grade);


//? switch statement

// switch day
let day = 1;
let dayName;
switch (day) {
     case 1:
          dayName = "Monday";
          break;
     case 2:
          dayName = "Tuesday";
          break;
     case 3:
          dayName = "Wednesday";
          break;
     default:
          dayName = "Invalid day";
}
console.log(dayName);

//! When NOT to use switch:
//! When conditions aren’t equality checks (e.g., <, >, or complex expressions).
//! When comparisons depend on multiple variables.
//! When the number of cases is small — if...else might be shorter and clearer.


// ? actual code from tutorial challenge

function selectItem(item) {
     let price = 0;
     switch (item) {
          case 'coffee':
               price = 2
               break
          case 'Sandwiches':
               price = 5
               break
          case 'Salad':
               price = 4
               break
          case 'Lemon Cake':
               price = 3
               break
          default:
               return `We don't sell ${item}`
     }
     return `You selected ${item} and it will cost $${price}`
}


// ? Object Destructuring from tutorial

const person = {
     name: 'John',
     age: 30,
     gender: 'male'
}
const { name, age, gender = 'unknown' } = person;
console.log(`name: ${name}, age: ${age}, gender: ${gender}`);


//? more about setTimeout:

// if the function inside the setTimeout has parameters, they can be passed as arguments after the delay time
function sayHello(greet, name) {
     console.log(`${greet}, ${name}!`);
}
setTimeout(sayHello, 2000, "Hello", "John");

//  logging the answer
function logAnswer(answer) {
     console.log(answer + " is the answer");
}
console.log('whats 22 plus 2?');
console.log("Waiting for the answer...");
setTimeout(logAnswer, 2000, 42);

// clearing the setTimeout before it runs
let timeoutId = setTimeout(logAnswer, 2000, 42); // store the timeout ID
clearTimeout(timeoutId); // could be attached to a button
// ? imp: The setTimeout function returns a unique ID that can be used to clear the timeout using the clearTimeout function
// ? imp: the actual time it takes to run the function is not the same as the delay time. Instead, the delay time is the minimum time it takes to run the function. It can be longer if the function takes longer to execute.


// ? Javascript is a single threaded language but
// browser gives it ability to run multiple tasks at the same time using web workers
// The Call Stack, WebAPIs, Task Queue and Event Loop makes async code possible.
// WebAPIs: not part of javascript but part of the browser.
// it has functionality for DOM manipulation, timers, data requests, storage, and more.


// ? exports and imports

// default export: Used to export a single value from a module
// syntax: export default value // it can be imported with any name.
// example: import something from "./module.js"
// imp: to avoid confusion, name the file with the same name as the value you are exporting
// example: export default something from "./something.js"

// named exports: Used to export multiple values from a module 
// syntax: export { value1 as something, value2, value3 } // it can be imported with any name using the keyword "as"
// example: import { something, something2, something3 } from "./module.js"

