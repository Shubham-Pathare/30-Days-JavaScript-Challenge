// Activity 1 : Function Declaration
// Task 1 - Write a functiion to check if a number is even or odd and log the result to the console

function check(num) {
  if (num % 2 === 0) {
    console.log("This is even number");
  } else {
    console.log("This is a odd number");
  }
}
check(5);

// Task 2

function square(num) {
  return num * num;
}

console.log(square(5));

// Activity 2 : Function Expression
// Task3

function maxNumber(n1, n2) {
  if (n1 >= 0 && n2 >= 0) {
    if (n1 > n2) {
      return `${n1} is greater`;
    } else {
      return `${n2} is greater`;
    }
  } else {
    return "Incorrect number";
  }
}

console.log(maxNumber(561, 346));

// Task 4

function concatenate(str1, str2) {
  return str1 + str2;
}
console.log(concatenate("Shubham ", "Pathare"));

// Activity 3 : Arrow Function
// Task 5

const sum = (num1, num2) => {
  return num1 + num2;
};
console.log(sum(2, 3));

// Task 6

const checkChar = () => {
  let str = "Shubham";
  let result = str.includes("p");
  return result;
};

console.log(checkChar());

// Activity 4 : Function Parameters and Default Values
// Task 7

function multiply(n1, n2 = 2) {
  return n1 * n2;
}

console.log(multiply(10));

// Task 8

const greetMessage = (name, age = 20) => {
  return `Good Morning ${name}! Welcome to the code zone `;
};
console.log(greetMessage("shubham"));

// Activity 5 : Higher order Function
// Task 9

// const greetMsg = (name) => console.log(`Hello, ${name}`);

// const greet = (func, n) => {
//   for (let i = 0; i < n; i++) {
//     func("Shubham");
//   }
// };

// console.log(greet(greetMsg, 5));

// Task 10

const fun1 = (name) => {
  return `${name} from function 1`;
};

const fun2 = (result) => console.log(`${result} from function 2`);

const dualFunction = (func1, func2, value) => {
  const result = func1(value);
  func2(result);
};
dualFunction(fun1, fun2, "Shubham");
