"use strict";
// 42. Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding
// the phrase the Great to each magician’s name. Call show_magicians() to
// see that the list has actually been modified.
Object.defineProperty(exports, "__esModule", { value: true });
let magiciansName1 = ['David Blaine', 'harry potter', 'Harry Houdini', 'Doug Henning'];
let show_magicians1 = (a) => {
    a.forEach((e) => {
        console.log(e);
    });
};
show_magicians1(magiciansName1);
//add great
let make_great = (a) => {
    return a.map((e) => `greet ${e}`);
};
let magiciansName = make_great(magiciansName1);
console.log(magiciansName);
