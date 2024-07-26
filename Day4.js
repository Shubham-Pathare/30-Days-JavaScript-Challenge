// Activity 1 : For Loop
// Task 1

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Task 2

for (let i = 5; i <= 50; i = i + 5) {
  console.log(i);
}

// Activity 2 : While Loop
// Task 3

let j = 1;
let sum = 0;
while (j <= 10) {
  sum = sum + j;
  j++;
}
console.log("The sum of numbers is: ", sum);

// Task 4

let i = 10;
while (i >= 1) {
  console.log("The number is " + i);
  i--;
}

// Activity 3 : Do...While Loop
// Task 5

let x = 1;
do {
  console.log(x);
  x++;
} while (x <= 5);

// Task 6

let p = 1;
let multiple = 1;
do {
  multiple *= p;
  p++;
} while (p <= 5);

console.log(multiple);

// Activity 4 : Nested Loops
// Task 7

let a, b;
for (a = 1; a <= 5; a++) {
  let pattern = " ";
  for (b = 1; b <= a; b++) {
    pattern += "* ";
  }
  console.log(pattern);
}

// Activity 5 : Loop Control statements
// Task 8

for (let i = 1; i < 11; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}

// Task 9

for (let i = 1; i < 11; i++) {
  if (i === 7) {
    break;
  }
  console.log(i);
}
