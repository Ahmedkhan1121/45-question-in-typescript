"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 20. Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything
// else you’d like. Write a program that creates a list containing these items.
let languages = ['Javascript', 'typescript', 'python', 'react'];
let print = () => {
    languages.forEach((e, i) => {
        console.log(`${i + 1}) ${e}`);
    });
};
print();
