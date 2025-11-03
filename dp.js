//Exercise 1: Complex Arithmetic and Standard Rules
var result = 3 + 5 * (10 / 2) - (8 - 4);
console.log(result);

//Exercise 2: Case Sensitivity Test
var projectIdentifier = "COMP484";
var ProjectIdentifier = "JS_Advanced";
console.log(projectIdentifier);
//Doesn't work because Javascript is case-sensitive language so projectIdentifier is still equal to COMP484

var projectIdentifier = "JS_Advanced";
console.log(projectIdentifier);


//Exercise 3: String Quoting Challenge

var courseDescription =
  "The course is \"interactive\" and involves 'scripting' logic.";
console.log(courseDescription);
//The course is "interactive" and involves 'scripting' logic.


//Exercise 4: Escaping and Console Output
var errorMessage = 'An internal server error occurred: "Access Denied"';
console.log(errorMessage);
//An internal server error occurred: "Access Denied"

//Exercise 5: Type Coercion with Non-Plus Operators

var valueA = 10;
var valueB = "4";
var resultSuntraction = valueA - valueB;
var resultMultiplication = valueA * valueB;
console.log(resultSuntraction);
console.log(resultMultiplication);
//6
//40

//Exercise6: Understanding `null` and `undefined` Types
var unassignedVar;
var explicitNull = null;

console.log(typeof unassignedVar);
console.log(typeof explicitNull);
//undefined
//object
//Null is marked as a primitive values so its consider an object in javascript

//Exercise 7: Boolean Assignment and Type Identification
var isBlocking = true;
console.log(typeof isBlocking);
//boolean
var isBlocking = "true";
console.log(typeof isBlocking);
//string

//Exercise 8: Invalid Variable Naming

//var 5roses;

//Uncaught SyntaxError: Invalid or unexpected tokenUnderstand this error
//Not allowed to add number at beginning of a variable

//var flower bed;

//Uncaught SyntaxError: Unexpected identifier 'bed'Understand this error
//Can't add spaces because it will read the second word as an unidentified variable

//var lily&pond;

//Uncaught SyntaxError: Unexpected token '&'Understand this error
//Can only use underscore from the special characters for naming variables

//Exercise 9: Chained Shorthand Arithmetic

var counterValue = 50;
counterValue /= 5;
counterValue -= 3;
console.log(counterValue);
//7

//Exercise 10: Prefix vs. Postfix Unary Operators

var x = 10;
var y_post = x++;
console.log(x);
console.log(y_post);
//11
//10

var x = 10;
var z_pre = ++x;
console.log(x);
console.log(z_pre);

//Exercise 11: Loose Equality and Coercion
var testNumber = 0;
var testBoolean = false;

if (testNumber == testBoolean) {
  console.log("The two variables are loosely equal");
} else {
  console.log("The two variables are not loosely equal");
}
//The two variables are loosely equal

//The reason the statement is loosely equal is because the == converts to different variables into the same type coercion


//Exercise 12: Strict Inequality Test
var versionA = 10.0;
var versionB = "10.0";

if (versionA !== versionB) {
    "versionA and versionB are not strictly equal"
} else {
    "versionA and versionB are strictly equal"
};

//'versionA and versionB are not strictly equal'

//Exercise 13: Logical OR and AND Combination
var isLoggedIn = true;
var isSubscriber = true;
var isTrialExpired = false;

if ((isLoggedIn && isSubscriber) || (isLoggedIn && isTrialExpired)) {
    console.log("Access should be granted.");
} else {
    console.log("Access denied.");
};
//"Access should be granted."

//Exercise 14: Simulating XOR using Nested Conditionals
var conditionA = true;
var conditionB = false;

if ((conditionA == true || conditionB == true) && (conditionA != conditionB)) {
    console.log("XOR Success");
} else {
    console.log("XOR Fail");
};
//"XOR Success"

//Exercise 15: Converting IF/ELSE to Ternary Operator
var scriptLoadType = "deferred";
var loadStatus;
if (scriptLoadType == "deferred") {
    loadStatus = "Non-blocking";
} else {
    loadStatus = "Potentially Blocking";
};

loadStatusTernary =
  scriptLoadType == "deferred"
    ? (loadStatus = "Non-blocking")
    : (loadStatus = "Potentially Blocking");

console.log(loadStatus);

//Exercise 16: Commenting and Code Structure
function calculateRenderTime(user_input) {
    //Function that calculates the time it takes to load the file and then the script
    
};
/* The function will calculate the time it takes to parse HTML and execute JavaScript in order to load the webpage */

//Exercise 17: Date Object Formatting Challenge (MM/DD/YYYY)
var date = new Date();
var formattedDate = date.toLocaleDateString("en-US");
console.log("Today is " + formattedDate);

//Exercise 18: Mixed Type Arithmetic Explanation
var val1 = 20;
var val2 = "5";
var sumResult = val1 + val2;
var diffResult = val1 - val2;
console.log(sumResult);
console.log(diffResult);
/* The reason sumResult is 205 is because the addition sign is overrided by the string variable since it also combines strings in Javascript. Meanwhile diffResult actually performs arithmetic to get 15 because its function is subtraction in JavaScript*/

//Exercise 19: Conditional based on Type Check
var dataInput = 484;
if (typeof dataInput === "number") {
    console.log("Input is numeric");
} else {
    dataInput = true;
    console.log(typeof dataInput);
};

//Exercise 20: Simulating DOM Manipulation Timing Failure (Conceptual)
document.body.innerHTML = "<h1>Interactive Layer Loaded</h1>";
/* 
  Programmers use the 'defer' or 'async' attribute to prevent render blocking.
  Without these attributes, the browser pauses HTML parsing to load and execute
  JavaScript, then continues parsing until it encounters another script tag.

  The 'defer' and 'async' attributes solve this by either:
  - 'defer': loading the script while parsing HTML and executing it after the page has finished parsing.
  - 'async': downloading the script alongside the HTML and executing it as soon as it’s ready.

  This ensures the page renders faster and prevents blocking the main thread, also leads to the error "Cannot set property
'innerHTML' of null".
*/