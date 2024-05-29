"use strict";
// 31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
Object.defineProperty(exports, "__esModule", { value: true });
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
//let usernames:string[]=["admin",'moiz','ashar'];
let usernames = [];
if (usernames.length === 0) {
    console.log(`We need to find some users`);
}
else {
    for (let i = 0; i < usernames.length; i++) {
        if (usernames[i] === 'admin') {
            console.log(` Hello ${usernames[i]}, would you like to see a status report?`);
        }
        else {
            console.log(`Hello ${usernames[i]}, thank you for logging in again.`);
        }
    }
}
