"use strict";
// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
Object.defineProperty(exports, "__esModule", { value: true });
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print
// a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end
// of your program.
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
console.log("\n You can invite only two people for dinner. \n");
while (invitedPerson1.length > 2) {
    let popElem = invitedPerson1.pop();
    console.log(`Dear ${popElem}, sorry you can’t invite them to dinner \n`);
}
;
console.log(" \nInvited Two Person\n");
invitedPerson1.forEach((e) => {
    console.log(`Dear ${e}, You are still invited to dinner at my Home`);
});
invitedPerson1.splice(0, 2);
console.log(invitedPerson1);
