// Activity 1 : Object Creation and Access
// Task 1 - Create an object representing a book with properties like title, author, and year, and log the object

const book = {
  title: "Book1",
  author: "John Doe",
  year: "2001",
};
console.log(book);

// Task 2 - Access and log the title and author properties of the book object

console.log(
  `The title of the book is ${book.title} written by the author ${book.author}`
);

// Activity 2 : Object Methods
// Task 3 - Add a method to the book object that returns a string with the book's title and author

book.result = function () {
  return `${book.title} by  ${book.author}`;
};
console.log(book.result());

// Task 4 - Add a method to the book object that takes a parameter(year) and updates the book's year property

book.updateYear = function (newYear) {
  return (book.year = newYear);
};
console.log(book.updateYear(2002));
console.log("Updated", book);

// Activity 3 : Nested Objects
// Task 5 - Create a nested object representing a library with properties like name and books(an array of book objects)

const library = {
  name: "College Library",
  book: [
    {
      title: "Book 2",
      author: "John",
      year: 2023,
    },
    {
      title: "Book 3",
      author: "Doe",
      year: 2024,
    },
  ],
};
console.log(library);

// Task 6 - Access and log the name of the library and the titles of all the books in the library.

console.log(
  `${library.name} has books with titles : ${library.book.map(
    (book) => book.title
  )}`
);

// Activity 4 : The this keyword
// Task 7 - Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method

book.getStringByThis = function () {
  return `${this.title} in  ${this.year} `;
};
console.log(book.getStringByThis());

// Activity 5 : Object Iteration
// Task 8 - Use a for..in looop to iterate over the properties of the book object and each property and its value

for (const key in book) {
  console.log(key, book[key]);
}

// Task 9 - Use object.keys and object.values methods to log all the keys and values of the book object

Object.keys(book).map((key) => console.log(key));
Object.values(book).map((book) => console.log(book));
