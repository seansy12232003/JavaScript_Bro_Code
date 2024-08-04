// console.log(`Hello`);
// console.log(`I like pizza!`);

// window.alert(`This is an Alert!`)
// window.alert(`I like pizza!`)

// This is a comment
/*
    This
    is
    a
    Comment
*/

// document.getElementById("myH1").textContent = `Hello`;
// document.getElementById("myP").textContent = `I like pizza!`;







// USER INPUT

// 1. Easy Way = window prompt
// 2. Professional Way = HTML Textbox

// let username;

// username = window.prompt("What's your Username?");

// console.log(username);

// let username;

// document.getElementById("mySubmit").onclick = function(){
//     username = document.getElementById("myText").value;
//     document.getElementById("myH1").textContent = `Hello ${username}`
// }

// HTML

// <h1 id="myH1">Welcome</h1>

// <label>Username: </label>
// <input id="myText"><br><br>
// <button id="mySubmit">Submit</button>




// TYPE CONVERSION

// let age = window.prompt("How old are you?");
// age = Number(age);
// age+=1;

// console.log(age, typeof age);

// let x, y, z = "";

// x = Number(x);
// y = String(y);
// z = Boolean(z);

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);







// METHOD CHAINING

// let username = window.prompt("Enter your Username");

// ------- NO METHOD CHAINING -------

// username = username.trim();
// let letter = username.chatAt(0);
// letter = letter.toUpperCase();

// let extraChars = username.slice(1);
// extraChars = extraChars.toLowerCase();

// username = letter + extraChars;

// console.log(username);


// ------- METHOD CHAINING -------

// username = username.trim().charAt(0).toUpperCase() + username.slice(1).toLowerCase();







// STRICT EQUALITY
/*

=== strict equality (if value and datatype are equal)

!== strict inequality

*/






// FUNCTIONS

// function add(x, y){
//     return x + y;
// }





// CALLBACKS

// callback = a function that is passed as argument to another function

// used to handle asynchronous operations:
// 1. Reading a file
// 2. Network Requests
// 3. Interacting with Databases

// TRY 1

// function hello(){
//     setTimeout(function(){console.log("Hello")}, 3000);
// }

// function goodbye(){
//     console.log("Goodbye");
// }

// Will end up calling hello after goodbye


// TRY 2

// hello(goodbye);          <--- dont put () for goodbye otherwise will call goodbye

// function hello(callback){
//     console.log("Hello");
//     callback();
// }

// function wait(){
//     console.log("Wait");
// }

// function leave(){
//     console.log("Leave");
// }

// function goodbye(){
//     console.log("Goodbye");
// }

// Will call function after hello




// FOR EACH

// forEach() = method used to iterate over elements of array and apply function to them
// array.forEach(callback)


// MAP

// .map() = accepts a callback and applies that function 
//          to each element of the array, then returns a new array
// .map(callback)


// FILTER

// .filter() = creates a new array by filtering out elements
// .filter(callback)


// REDUCE

// .reduce() = reduces the elements of array to a single value
// .reduce(callback)

// const grades = [20, 50, 95, 10, 40, 87];
// const maximum = grades.reduce(getMax);

// function getMax(accumulator, element){
//     return Math.max(accumulator, element);
// }








// FUNCTION EXPRESSIONS

// const hello = function{
//     console.log("Hello");
// }

// hello();

// setTimeout(function(){
//     console.log("Hello");
// }, 3000);

// const numbers = [1,2,3,4,5,6];
// const squares = numbers.map(function(element){
//     return Math.pow(element, 2);
// });









// ARROW FUNCTIONS

// concise way to write function expressions you use only once
// (parameters) => some code

// const hello = function(){
//     console.log("Hello");
// };

// const hello = (name) => console.log(`Hello ${name}`);

// hello("Bro");






// DESTRUCTURING

// extract values from arrays and objects, then assign them to variables
// [] = to perform array destructuring
// {} = to perform object destructuring


// ---- EXAMPLE -----

// const colors = ["red", "green", "blue", "yellow", "purple"];

// [colors[0], colors[4]] = [colors[4], colors[0]]; // Swap 1st and 5th colors

// const [color1, color2, color3, ...extraColors] = colors; // Extract 1,2,3 and put rest in an array


// const person1 = {
//     firstName: "Joe",
//     lastName: "Bob",
//     age: 30,
//     job: "Cook",
// }

// const {firstName, lastName, age, job} = person1; // Extract Values from Object

// function displayPerson({firstName, lastName, age, job}){ // Destructure right away
//     console.log(`name: ${firstName} ${lastName}`);
//     console.log(`age: ${age}`);
//     console.log(`job: ${job}`);
// }

// displayPerson(person1)






// SORT

// sort() method used to sort elements of array in place

// let numbers = [1,10,2,3,8,4,6,5,9];

// numbers.sort((a,b) => a - b); // 1 -> 10

// numbers.sort((a,b) => b - a); // 10 -> 1

// const names = ["Joe", "Billy", "Jason", "Perry"];

// names.sort((a, b) => a.localeCompare(b)); // a -> z
// names.sort((a, b) => b.localeCompare(a)); // z -> a










// DATE OBJECT

// Date(year, month, day, hour, minute, second, ms)

// const date = new Date(2024, 0, 1, 2, 3, 4, 5);
// Mon Jan 01 2024 02:03:04

// const date = new Date("2024-01-02T12:00:00Z"); // T for Time, Z for UTC time
// Tuesday Jan 02 2024 06:00:00 

// const date = new Date()
// Current date and time











// CLOSURE 

// closure = A Function defined inside another function, the inner function has access
//          to variables and scope of the outer function.
//          Allow for private variables and state maintenance
//          Used in React, Vue, Angular

// EXAMPLE
// function outer(){

//     let message = "Hello";
//     function inner(){ // closure
//         console.log(message);
//     }

//     inner();
// }
// outer();






// ASYNCHRONOUS VS SYNCHRONOUS

// synchronous = Executes line by line consecutively in a sequential manner
//               Code that waits for an operation to complete.

// asynchronous = Allows multiple operations to be performed concurrently
//                without waiting. Doesn't block the execution flow and
//                allows the program to continue
//                (I/O operations, network requests, fetching data)
//                Handled with: Callbacks, Promises, Async/Await





// ERROR HANDLING

// try, catch, finally

// EXAMPLES

// try{
//     // NETWORK ERRORS
//     // PROMISE REJECTION
//     // SECURITY ERRORS

//     if(){
//         throw new Error("You can't divide by zero!");
//     }
// }

// catch(error){
//     console.error(error);
// }

// finally{
//     // CLOSE FILES
//     // CLOSE CONNECTIONS
//     // RELEASE RESOURCES
// }






// DOM = DOCUMENT OBJECT MODEL