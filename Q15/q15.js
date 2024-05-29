"use strict";
// 15. Changing Guest List: You just heard that one of your guests can’t make the
// dinner, so you need to send out a new set of invitations. You’ll have to think of
// someone else to invite.
Object.defineProperty(exports, "__esModule", { value: true });
// • Start with your program from Exercise 14. Add a print statement at the
// end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with
// the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still
// in your list.
let invitedPerson1 = ['moiz', 'ashar', 'anas', 'sameer'];
const forEcahElem = () => {
    invitedPerson1.forEach((e) => {
        console.log(e);
    });
};
forEcahElem();
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
