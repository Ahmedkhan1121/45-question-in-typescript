"use strict";
// 29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
Object.defineProperty(exports, "__esModule", { value: true });
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement,
// such as You really like bananas!
let favorite_fruits = ['apple', 'Guava', 'mango'];
//  console.log(favorite_fruits.toString().toLowerCase().split(",").includes("apple".toLowerCase()));
//  console.log(favorite_fruits);
if (favorite_fruits[0] === 'apple') {
    console.log(`do You really like ${favorite_fruits[0]}`);
}
if (favorite_fruits[1] === "Guava") {
    console.log(`do you reall like ${favorite_fruits[1]}`);
}
if (favorite_fruits[2] === 'mango') {
    console.log(`do you reall like ${favorite_fruits[2]}`);
}
if (favorite_fruits.includes('banana')) {
    console.log(`do you like banana `);
}
if (favorite_fruits.includes('water malan')) {
    console.log(`do you like water malan `);
}
