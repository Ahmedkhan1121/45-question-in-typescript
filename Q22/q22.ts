// 22. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

// // Define an array with 3 elements
// let myArray: number[] = [10, 20, 30];

// // Function to safely access array elements
// function safeAccess(array: number[], index: number): number | undefined {
//     if (index >= 0 && index < array.length) {
//         return array[index];
//     } else {
//         console.log(`Index ${index} is out of bounds`);
//         return undefined;
//     }
// }

// // Try to access an out-of-bounds index
// console.log(safeAccess(myArray, 5));  // This will log an error message and return undefined

// // Correctly access an existing index
// console.log(safeAccess(myArray, 2));  // This will print 30
