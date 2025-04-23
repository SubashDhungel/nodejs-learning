// Importing events module 
const { EventEmitter } = require("events");

// Creating an object for EventEmitter
const chatEmitter = new EventEmitter();

// Creating listener functions
let firstListener = (msg) => {
    console.log(`Message from first listener: ${msg}`);
}
let secondListener = (msg) => {
    console.log(`Message from second listener: ${msg}`);
}
let thirdListener = (msg) => {
    console.log(`Message from third listener: ${msg}`);
}

// Listening for a 'chat' event
chatEmitter.on('chat', firstListener);
chatEmitter.on('chat', secondListener);
chatEmitter.on('chat', thirdListener);

// Triggering the 'chat' event
chatEmitter.emit('chat', "How you doing?");
