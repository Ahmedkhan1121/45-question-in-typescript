// 44. Sandwiches: Write a function that accepts a array of items a person wants
// on a sandwich. The function should have one parameter that collects as many
// items as the function call provides, and it should print a summary of the sandwich
// that is being ordered. Call the function three times, using a different number
// of arguments each time.
var Sandwiches = function (arr) {
    if (arr.length === 0) {
        console.log("sandwiches not availible ");
    }
    else {
        arr.forEach(function (e) {
            console.log("your ".concat(e, " has been deliverd "));
        });
    }
};
console.log("first Order\n");
Sandwiches(['Cheeze Sandwich']);
console.log("\nsecond order\n");
Sandwiches(["Grilled Chicken Sandwich"]);
console.log("\nthird Order\n");
Sandwiches(["Roast Beef Sandwich"]);
console.log("\nforth Order\n");
Sandwiches(["Egg Sandwich", 'Chicken Sandwich', 'Seafood Sandwich']);
Sandwiches([]);
