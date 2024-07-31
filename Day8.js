// Activity 1 : Template Literals
// Task 1 - Use template literals to create a string that includes variables for a person's name and age

const name = "Shubham";
const age = 20;
const str = `${name} is ${age} year old!`;
console.log(str);

// Task 2 - Create a multi-line string using template literals

const str1 = `Hello there!
 welcome to our website.
 How can we help you today?
`;
console.log(str1);

// Activity 2 : Destructuring
// Task 3 - USe array destructuring to extract the first and second elements from an array of numbers

const num = [1, 2, 3, 4, 5];
let { [0]: a1, [1]: a2 } = num;
console.log(a1, a2);

// Task 4 - Use object destructuring to extract thetitle and author from a book object

const book = {
  title: "Book1",
  author: "John",
  year: 2000,
};

let { title, author } = book;
console.log(title, author);

// Activity 3 : Spread and Rest Operators
// Task 5 - Use the spread operator to create a new array that includes all elements of an existing array plus additional elements

const arr = [1, 2, 3, 4];
const newArray = [...arr, 5, 6];
console.log(newArray);

// Task 6 - Use the rest operator in a function to accept an arbitary number of arguments, sum them, and return the result

function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3, 4, 5, 10));

// Activity 4 : Default parameters
// Task 7 - Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1

function product(num1, num2 = 1) {
  return num1 * num2;
}
console.log(product(4));
console.log(product(4, 4));

// Activity 5 : Enhanced Object Literals
// Task 8 - Use enhanced object literals to create an object with methods and properties

let breed = "German Shepherd";
let ages = 3;
let colour = "brown";
let propName = "anotherColour";

let bark = function () {
  return `I am ${breed} and I am a ${ages} years old. ${colour} coloured dog `;
};

let dog = { breed, ages, colour, bark };
console.log(dog);
console.log(dog.bark());

// Task 9 - Create an objecct eith computed property names based on variables and og the object

const anotherDog = {
  breed,
  ages,
  [propName]: "Black",
};
console.log(anotherDog);
