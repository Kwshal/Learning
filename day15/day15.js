// ? Constructors: inbuild and custom

// requires the keyword new
//? Object() - used to create objects. not recommended. use {} instead.
//? Array() - used to create arrays. not recommended. use [] instead.
//? String() - used to create strings. not recommended. use "" instead.
//? Date() - used to create date objects. 

// doesnt require the keyword new
//? Math() - used to perform mathematical operations. example: Math.floor()
//? Number() - used to convert string to number. doesnt require the keyword new.
//? Boolean() - used to convert string to boolean
//? BigInt():
     // used for numbers bigger than Number.MAX_SAFE_INTEGER ie 9007199254740991
     // javascipt loses precision after 15 digits and requires BigInt
     //! imp: cannot mixed with non BigInt numbers
     // used in cryptography and other data that requires very large numbers
     //! big numbers can be separated by _ to make it easier to read
     // example: console.log(344_444_343); // output: 344444343
//? SomeCustomConstructor()


//? preincrement operator: ++num:
// use case of preincrement operator:
//* let num = 5;
//* console.log(++num); // Output: 6
// same goes for postincrement, postdecrement, or predecrement operators

// ! not from the tutorial
//? nullish coalescing operator: ??
//? optional chaining operator: ?.
//? spread operator: ...
//? rest operator: ...
// !


//? Hoisting: it is a JavaScript mechanism where variables and functions are moved to the top of their scope before code execution.
//* console.log(a);
//* let a = 5;
// console: cannot access 'a' before initialization

// the above example is same as writing:
//* let a;
//* console.log(a);
//* a = 5;
// the variables do get hoisted to the top of their scope but the value is not initialized.


// ! not from the tutorial
// ? Closure: a function that has access to variables in its parent scope, even after the parent function has finished executing.
// ? Currying: a function that returns a function with some of its arguments pre-filled.
// ? Recursion: a function that calls itself.
// ? Callbacks: a function that is passed as an argument to another function and is executed inside that function.
// ? Promises: a way to handle asynchronous operations in JavaScript.
// ? Async/Await: a syntax that makes it easier to work with promises in JavaScript.
//! 