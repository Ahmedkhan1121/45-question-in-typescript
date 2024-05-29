"use strict";
// 37. Large Shirts: Modify the make_shirt() function so that shirts are large
// by default with a message that reads I love TypeScript. Make a large shirt and a
// medium shirt with the default message, and a shirt of any size with a different
// message.
Object.defineProperty(exports, "__esModule", { value: true });
let make_shirt = (size = 'larger', message = 'i love TypeScript') => {
    console.log(`the size of the shirt ${size} and the message ${message}`);
};
make_shirt();
make_shirt('medium', 'The shirt is one of the best shirt in my shope');
