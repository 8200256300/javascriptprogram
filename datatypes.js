//two types of data types in javascript
//1. Primitive Data Types
    // Object
    // Number
    // BigInt
    // string
    // Boolean
    // Undefined
    // Null
    // Symbol
//2. Non-Primitive Data Types
     //Array
     //object
    // Function

//Primitive Data Types

//1. Number
let num = 1;
let num2 = 2;
console.log("num",num,num2); // "number"

//2. String
let str = "Mahil Patel";
console.log("str",str); // "string"

//3. Boolean
let bool = true;
console.log("bool",bool); // "boolean"

//4. Undefined
let undef;
console.log("undef",undef); // "undefined"

//5. Null
let nul = null;
console.log("null",nul); // "object" (this is a known quirk in JavaScript)

//6. Symbol         
let sym = Symbol("unique");
console.log("sym",sym); // "symbol"

//7. BigInt
let bigIntNum = 9007199254741991n;
console.log("bigint",bigIntNum); // "bigint"

//Non-Primitive Data Types

//1. Object
let obj = {
    name: "Mahil",
    age: 20
};
console.log("obj",obj); // "object"

//2. Array
let arr = [1, 2, 3, 4, 5];
console.log("array",arr); // "object"

//3. Function
function fun() {
    console.log("Mahil Khanpara");
}   
fun(); // "function"

function showValue(value) {
    console.log("Number Value:", value);
    if (value == 30) 
        {
        console.log("The value is exactly 20.");
}
    else {
        console.log("The value is not 20.");
}
}
showValue();
showValue(20); 

// function add(a, b) {
//     return a + b;
// }
// console.log("Addition:", add(5, 10));

// function sub(a, b) {
//     return a - b;
// }
// console.log("Subtraction:", sub(10, 5));

// function mult(a, b) {
//     return a * b;
// }   
// console.log("Multiplication:", mult(10, 10));

// function div(a, b) {
//     return a / b;
// }                   
// console.log("Division:", div(20, 2));

// Aerithmetic Operator

function aerithmeticOperations(x, y) {
    console.log("Addition:", x + y);
    console.log("Subtraction:", x - y);
    console.log("Multiplication:", x * y);
    console.log("Division:", x / y);
}
aerithmeticOperations(10, 5);


//Arrow Functions
const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mult = (a, b) => a * b;
const div = (a, b) => a / b;    
console.log("Addition:", add(5, 10));
console.log("Subtraction:", sub(10, 5));
console.log("Multiplication:", mult(10, 10));
console.log("Division:", div(20, 2));   



//Assignment Operators

let value = 10;
console.log("Initial Value:", value);

value += 5;
console.log(value);

value -= 3;
console.log(value);

value *= 2;
console.log(value);

value /= 4;
console.log(value);

//Logical Operators
let age = 20;
let hasID = true
let name = "Mahil";
let object = {
    name: "Mahil",

}

console.log("Logical AND (&&):", age > 18 && hasID); 
console.log("Logical OR (||):", age < 18 || hasID); 
console.log("Logical NOT (!):", !hasID); 

console.log(typeof age);
console.log(typeof hasID);
console.log(typeof name);
console.log(typeof object);


//Comparison Operators
let val= 10;
let number = "10";

console.log(val == number);
console.log(val === number);
console.log(val != number);
console.log(val !== number);
console.log(val > 5);
console.log(val < 15);
console.log(val >= 10);
console.log(val <= 20);
