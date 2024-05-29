"use strict";
// 41. Magicians: Make a array of magician’s names. Pass the array to a function
// called show_magicians(), which prints the name of each magician in the array.
Object.defineProperty(exports, "__esModule", { value: true });
let magiciansName = ['David Blaine', 'harry potter', 'Harry Houdini', 'Doug Henning'];
let show_magicians = (a) => {
    a.forEach((e) => {
        console.log(e);
    });
};
show_magicians(magiciansName);
// let show_magicians=(a:string):void=>{
//     console.log(a);
// };
// show_magicians(magiciansName)
// let show_magicians=(a:string[]):void=>{
//     for(let i=0; i<magiciansName.length; i++){
//         console.log(magiciansName[i]);
//     };
// };
// show_magicians(magiciansName);
