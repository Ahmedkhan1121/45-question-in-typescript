"use strict";
// 36. T-Shirt: Write a function called make_shirt() that accepts a size and the
// text of a message that should be printed on the shirt. The function should print
// a sentence summarizing the size of the shirt and the message printed on it.
// Call the function.
Object.defineProperty(exports, "__esModule", { value: true });
let make_shirt = (size, message) => {
    console.log(`the size of the shirt ${size} and the message ${message}`);
};
make_shirt('medium', 'The shirt is one of the best shirt in my shope');
