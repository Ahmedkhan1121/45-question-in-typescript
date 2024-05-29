// 19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.//

let invitedPerson1:string[]=['moiz','ashar','anas','sameer'];
const forEcahElem = ():void => {
    invitedPerson1.forEach((e) => {
        console.log(`Dear ${e}, You Are Invited to Dinner at my Home.`);
    });
};
forEcahElem();
//function declaration
function newGuestList1(oldGuest1:string, newGuest1:string):void{
    let index1 = invitedPerson1.indexOf(oldGuest1);
    if(index1 === -1){
        console.log(`"${oldGuest1}" is not available inthe List.`);
    }else{
        invitedPerson1[index1] = newGuest1;
        console.log(`\n "${oldGuest1}" nahi aa sakta. Uske jagah "${newGuest1}" ko bulaya gaya hai. \n`);
    }

}
newGuestList1("sameer","Shahzaib");
console.log("After Modify the list \n");
forEcahElem();

// Add Three Guest
invitedPerson1.unshift("Naveed");
invitedPerson1.splice(2,0,"Ali");
invitedPerson1.push("Ajmal");
console.log(" \n After Add Three Guest \n");
forEcahElem();
console.log("\n You can invite only two people for dinner. \n");
while(invitedPerson1.length > 2){
    let popElem = invitedPerson1.pop();
    console.log(`Dear ${popElem}, sorry you can’t invite them to dinner \n`);
};
console.log(" \nInvited Two Person\n");
invitedPerson1.forEach((e) => {
    console.log(`Dear ${e}, You are still invited to dinner at my Home`);
});
invitedPerson1.splice(0,2);
console.log(invitedPerson1);
console.log(`\n The Total Number of People we are invited is ${invitedPerson1.length} \n`);