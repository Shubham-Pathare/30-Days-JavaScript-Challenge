// Activity 1 : If-Else Statements
// Task 1

let num = 5;

if (num > 0) {
  console.log("The given number is positive");
} else if (num < 0) {
  console.log("The given number is negative");
} else if (num === 0) {
  console.log("The given number is zero");
}

// Task 2

let age = 16;

if (age >= 18) {
  console.log("Person is eligible to vote");
} else {
  console.log("Person is not eligible to vote");
}

// Activity 2
// Task 3
let num1 = 10;
let num2 = 40;
let num3 = 30;

if (num1 > num2) {
  if (num1 > num3) {
    console.log("num1 is the biggest number");
  } else {
    console.log("num3 is the biggest number");
  }
} else if (num2 > num3) {
  console.log("num2 is the biggest number");
} else {
  console.log("num3 is the biggest number");
}

// Activity 4 : Switch Case
// Task 4

let number = 5;

switch (number) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;

  default:
    console.log("It's Funday");
    break;
}

// Task 5
let score = 10;

switch (true) {
  case score >= 90:
    console.log("A grade");
    break;

  case score >= 80:
    console.log("B grade");
    break;

  case score >= 60:
    console.log("C grade");
    break;

  case score >= 50:
    console.log("D grade");
    break;

  case score < 35:
    console.log("F grade");
    break;
}

// Activity 4 : Conditional ( Ternary ) Operator
// Task 6

let value = 11;
console.log(
  value % 2 === 0 ? "The given number is Even" : "The given number is Odd"
);

// Activity 5 : Combining Conditons
// Task 7

let year = 2300;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log("This is a leap year ");
} else {
  console.log("This is not a leap year");
}
