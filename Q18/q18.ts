// 18. Seeing the World: Think of at least five places in the world you’d like to visit.

// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its
// order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.




// • Store the locations in a array. Make sure the array is not in alphabetical order.
let locations:string[]=['Swat Valley','Hunza Valley','Skardu','Fairy Meadows','Neelum Valley'];
// • Print your array in its original order.
console.log('\nOriginal order\n:');
console.log(locations);

// • Print your array in alphabetical order without modifying the actual list.
let sortArr=locations.sort();
console.log('\nAlphabetical order\n:');
console.log(sortArr);

// • Show that your array is still in its original order by printing it.
console.log('Original order (after sorting attempt):');
console.log(locations);

// • Print your array in reverse alphabetical order without changing the order of the original list.
let sortAlpArr=locations.sort().reverse();
console.log('\nReverse alphabetical order\n:');
console.log(sortAlpArr);

// • Show that your array is still in its original order by printing it again.
console.log('\nOriginal order\n:');
console.log(locations);

// • Reverse the order of your list. Print the array to show that its
// order has changed.

locations.reverse();
console.log('\nReverse order\n:');
console.log(locations);

// • Reverse the order of your list again. Print the list to show it’s back to its original order
locations.reverse();
console.log('\n original order\n:');
console.log(locations);

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
locations.sort()
console.log('\nAlphabetical order (stored)\n:');
console.log(locations);

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

locations.reverse().sort();
console.log('\n Reverse alphabetical order (stored)\n:');
console.log(locations);
