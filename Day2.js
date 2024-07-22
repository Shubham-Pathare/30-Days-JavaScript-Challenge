// Activity 1 : Arithmetic Operators
// Task 1
function add(num1, num2) {
  return num1 + num2;
}
console.log(add(5, 6));

// Task 2
function sub(num1, num2) {
  return num1 - num2;
}
console.log(sub(8, 4));

// Task 3
function multipy(num1, num2) {
  return num1 * num2;
}
console.log(multipy(4, 4));

// Task 4
function divide(num1, num2) {
  return num1 / num2;
}
console.log(divide(25, 5));

// Task 5
function remainder(num1, num2) {
  return num1 % num2;
}
console.log(remainder(30, 4));

// Activity 2 : Assignment Operator
// Task 6
let num1 = 4;
num1 += 3;
console.log(num1);

// Task 7
let num2 = 5;
num2 -= 2;
console.log(num2);

// Activity 3 : Comparison Operator
// Task 8
let a = 5;
let b = 6;

let greaterThan = a > b;
console.log(`Greater than : ${greaterThan}`);

let lessThan = a < b;
console.log(`Less than : ${lessThan}`);

// Task 9
let greaterThanEqual = a >= b;
console.log(`Greater than or eaual to : ${greaterThanEqual}`);

let lessThanEqual = a <= b;
console.log(`Less than or eaual to : ${lessThanEqual}`);

// Task 10
let x = 2;
let y = "2";

let equalValue = x == y;
console.log(equalValue);

let equalValueType = x === y;
console.log(equalValueType);

// Activity 4 : Logical Operator
// Task 11

let l1 = 5;
let l2 = 6;

console.log(l1 < 10 && l2 > 5);

// Task 12
console.log(l1 < 10 || l2 < 5);

// Task 13
console.log(!(l1 > l2));

// Activity 5: Ternary Operator
// Task 14
let value = -2;
console.log(value > 0 ? "positive" : "negative");
