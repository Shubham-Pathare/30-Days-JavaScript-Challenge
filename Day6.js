// Activity 1 : Array Creation and Access
// Task 1 - Create an array of numbers from 1 to 5 and log the array to the console

const arr = [1, 2, 3, 4, 5];
console.log(arr);

// Task 2 - Access the first and last elements of the array and log them to the console

console.log("The first element of the array is " + arr[0]);
console.log("The last element of the array is " + arr[arr.length - 1]);

// Activity 2 : Array Methods(Basic)
// Task 3 - Use the push method to add a new number to the end of the array

arr.push(10);
console.log(arr);

// Task 4 - Use the pop method to remove the last element from the array

arr.pop();
console.log(arr);

// Task 5 - Use the shift method to remove the first element from the array

arr.shift();
console.log(arr);

// Task 6 - Use the unshift method to add a new number to the beginning of the array

arr.unshift(6);
console.log(arr);

// Activity 3 : Array Methods (Intermediate)
// Task 7 - Use the map method to create a new array where each number is doubled

const newArray = arr.map((x) => {
  return x * 2;
});
console.log(newArray);

// Task 8 - Use the filter method to create a new array with only even numbers

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = nums.filter((x) => {
  return x % 2 === 0;
});
console.log(newNums);

// Task 9 - Use the reduce method to calculate the sum of al numbers in the array and log the result

const sum = nums.reduce((acc, curr) => {
  return acc + curr;
}, 0);
console.log(sum);

// Acivity 4 : Array Iteration
// Task 10 - Use a for loop to iterate over the array and log each element

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let num = 1; num <= numbers.length; num++) {
  console.log(num);
}

// Task 11 - Use the forEach method to iterate over the array and log each element

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
number.forEach((num) => {
  console.log(num);
});
