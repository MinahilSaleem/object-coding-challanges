"Use strict"

// Task 1
console.log("Task 1");

// Make 3 Objects like:
// Car 1: {Make: Honda Model: Civic Year: 2019}
// Car 2: {Make: Toyota Model: Camry Year: 2020}
// Car 3: {Make: Ford Model: Mustang Year: 2018}
// And output them nicely.

let car1 = {Make: "HondaModel" , CivicYear: 2019};
let car2 = {Make: "ToyotaModel", CamryYear: 2020};
let car3 = {Make:" FordModel", MustangYear: 2018};
console.log(car1 , car2, car3);

// Task 2
console.log("Task 2");

// Question 2
// Part 1
// Write a program that prompts the user to enter the details
//  of a book - title,
// author, and number of pages - and stores the data
//  in an object. Then, output
// the details of the book to the console.

let userTitle = prompt("Enter the title of the book");
let userAuthor = prompt("Enter the author name of the book");
let userPages = prompt("Enter the number of pages of the book");

let object = {};

let propertyToAdd = {
    title: userTitle, Author: userAuthor, PageNumbers: userPages
};
for(const key in propertyToAdd){
    if (propertyToAdd.hasOwnProperty(key)) {
        object[key] = propertyToAdd[key];
      }
};

console.log(object);

// Task 3
console.log("Task 3");

// Part 2
// Write a function called findOldestPerson that takes
//  in an array of people (each
// person represented as an object with properties for name and age)
//  as a
// parameter and returns the name of the oldest person in the array.

let user1 = {name: "Minahil", age: 21};
let user2 = {name: "Sundas", age: 31};
let user3 = {name: "zaki", age: 29};
let array = [user1, user2, user3];
// console.log();
let oldestAge = array[0].age;
// console.log(oldestAge);
let oldest = 0;
console.log(array);
function findOldestPerson() {
    for (let i = 0; i < array.length; i++) {
        let index = array[i];
        let age = index.age;
        // console.log(age);
        if ( oldestAge < age ) {
            oldestAge = age;
            oldest = array[i].age;
        }
    }
    for (let i = 0; i < array.length; i++) {
        let indexName = array[i].age;
        if (oldest === indexName ) {
            let name= array[i].name;
            console.log(`The oldest one is: ${name}`);
        }
        
    }
};

findOldestPerson();

// Task 4
console.log("Task 4");

// Part 3
// Write a program that prompts the user to enter the details
//  of three movies -
// title, director, and year - and stores the data in an array
//  of objects. Then, sort
// the array by the year and output the details of each movie
//  to the console.

function promptForMovieDetails() {
    const movies = [];
  
    for (let i = 1; i <= 3; i++) {
      const title = prompt(`Enter the title of Movie ${i}:`);
      const director = prompt(`Enter the director of Movie ${i}:`);
      const year = parseInt(prompt(`Enter the year of Movie ${i}:`), 10);
  
      const movie = { title, director, year };
      movies.push(movie);
    }
  
    return movies;
  }
  
  function sortMoviesByYear(movies) {
    movies.sort((a, b) => a.year - b.year);
  }

  function displayMovieDetails(movies) {
    console.log("Sorted Movie Details:");
  
    for (const movie of movies) {
      console.log(`Title: ${movie.title}`);
      console.log(`Director: ${movie.director}`);
      console.log(`Year: ${movie.year}`);
      console.log("------------------------");
    }
  }
  
  const userMovies = promptForMovieDetails();
  sortMoviesByYear(userMovies);
  displayMovieDetails(userMovies);
  

// Task 5
console.log("Task 5");
// Write a function called calculateTotalPrice that takes
// in an array of items (each
// item represented as an object with properties
// for name and price) and returns
// the total price of all items in the array.

function calculateTotalPrice() {
    let array = [
    {Name: "Lenovo", Price: 61000},
    {Name: "Hp", Price: 71500},
    {Name: "Mac", Price: 120000}];
    console.log(array);
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        let totalPrice = Number(array[i].Price);
        total = total + totalPrice;

    }
    return total;
};
console.log(`The total amount = ${calculateTotalPrice()}`);

