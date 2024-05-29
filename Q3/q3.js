"use strict";
// 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
Object.defineProperty(exports, "__esModule", { value: true });
let personName1 = 'ahmed raza';
console.log(personName1.toLowerCase());
console.log(personName1.toUpperCase());
console.log(personName1.slice(0, 1).toUpperCase() + personName1.slice(1).toLowerCase());
function titlecase(str) {
    return str.replace(/\w\S*/g, (txt) => {
        return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();
    });
}
;
let returnTitalcase = titlecase(personName1);
console.log(returnTitalcase);
