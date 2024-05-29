"use strict";
// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the
// function make_great() with a copy of the array of magicians’ names. Because the
// original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.
Object.defineProperty(exports, "__esModule", { value: true });
let magiciansName1 = ['David Blaine', 'harry potter', 'Harry Houdini', 'Doug Henning'];
let magiciansName2Copy = magiciansName1.slice();
let greatMagicians = (arr) => {
    return arr.map((e) => `great${e}`);
};
let show_magicians = (arr) => {
    arr.forEach((e) => {
        console.log(e);
    });
};
let magiciansNameSave = greatMagicians(magiciansName2Copy);
console.log(magiciansNameSave);
console.log(`original magicians `);
show_magicians(magiciansName1);
console.log(`geart magicians`);
