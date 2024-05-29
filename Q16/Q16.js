"use strict";
// 16. More Guests: You just found a bigger dinner table, so now more space is
// available. Think of three more guests to invite to dinner.
Object.defineProperty(exports, "__esModule", { value: true });
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
// bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.
let invitedPerson1 = ['moiz', 'ashar', 'anas', 'sameer'];
const forEcahElem = () => {
    invitedPerson1.forEach((e) => {
        console.log(`Dear ${e}, You Are Invited to Dinner at my Home.`);
    });
};
forEcahElem();
//function declaration
function newGuestList1(oldGuest1, newGuest1) {
    let index1 = invitedPerson1.indexOf(oldGuest1);
    if (index1 === -1) {
        console.log(`"${oldGuest1}" is not available inthe List.`);
    }
    else {
        invitedPerson1[index1] = newGuest1;
        console.log(`\n "${oldGuest1}" nahi aa sakta. Uske jagah "${newGuest1}" ko bulaya gaya hai. \n`);
    }
}
newGuestList1("sameer", "Shahzaib");
console.log("After Modify the list \n");
forEcahElem();
// Add Three Guest
invitedPerson1.unshift("Naveed");
invitedPerson1.splice(2, 0, "Ali");
invitedPerson1.push("Ajmal");
console.log(" \n After Add Three Guest \n");
forEcahElem();
