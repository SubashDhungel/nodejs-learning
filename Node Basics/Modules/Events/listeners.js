const { EventEmitter } = require("events");

const myEmitter = new EventEmitter();

// Listener Functions
const greetListener = (name) => {
    console.log(`Hello, ${name}!`);
};

const welcomeListener = (name) => {
    console.log(`Welcome first, ${name}!`);
};

const byeListener = (name) => {
    console.log(`Goodbye, ${name}!`);
};

const onceListener = () => {
    console.log("This runs only once!");
};

// Register Listeners
myEmitter.on('greet', greetListener);
myEmitter.once('greet', onceListener);
myEmitter.prependListener('greet', welcomeListener);
myEmitter.prependOnceListener('greet', onceListener);

// Register byeListener separately
myEmitter.on('bye', byeListener);

// Emitting Events

console.log("\n--- Emitting 'greet' event first time ---");
myEmitter.emit('greet', 'Subash');

// Now emit bye AFTER greet
console.log("\n--- Emitting 'bye' event ---");
myEmitter.emit('bye', 'Subash');

console.log("\n--- Emitting 'greet' event second time ---");
myEmitter.emit('greet', 'Subash Again');


