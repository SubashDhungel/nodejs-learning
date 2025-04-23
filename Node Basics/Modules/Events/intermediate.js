// Import the EventEmitter class from the events module
const EventEmitter = require('events');

// Create a new instance of EventEmitter
const myEmitter = new EventEmitter();

// Error handler first
myEmitter.on('error', (err) => {
  console.log('Error event occurred: ', err);
});

// 1. Listening for events
myEmitter.on('event', () => {
  console.log('An event has occurred!');
});

// Emitting an event
myEmitter.emit('event');  // Output: An event has occurred!

// 2. Passing arguments with events
myEmitter.on('greet', (name) => {
  console.log(`Hello, ${name}!`);
});

// Emit the 'greet' event with an argument
myEmitter.emit('greet', 'Subash');  // Output: Hello, Subash!

// 3. Multiple listeners for the same event
myEmitter.on('greet', () => {
  console.log('First listener!');
});

myEmitter.on('greet', () => {
  console.log('Second listener!');
});

// Emit the 'greet' event
myEmitter.emit('greet');  
// Output:
// First listener!
// Second listener!

// 4. Using `once` to listen to events only once
myEmitter.once('greetOnce', () => {
  console.log('This will only be triggered once!');
});

// Emit the 'greetOnce' event twice
myEmitter.emit('greetOnce');  // Output: This will only be triggered once!
myEmitter.emit('greetOnce');  // No output

// 5. Error handling with the 'error' event
myEmitter.emit('error', new Error('Something went wrong!'));  
// Output: Error event occurred:  Error: Something went wrong!



// 6. Creating a custom EventEmitter class (Subclassing)
class MyCustomEmitter extends EventEmitter {
  doSomething(msg) {
    console.log('Doing something...'+msg);
    this.emit('done');
  }
}

// Create an instance of the custom emitter
const customEmitter = new MyCustomEmitter();

// Listen for the 'done' event
customEmitter.on('done', () => {
  console.log('Task completed!');
});

// Trigger the custom event
customEmitter.doSomething("what up");
// Output:
// Doing something...
// Task completed!

// 7. Handling multiple arguments
myEmitter.on('sum', (a, b) => {
  console.log(`The sum is: ${a + b}`);
});

// Emit the 'sum' event with arguments
myEmitter.emit('sum', 5, 10);  // Output: The sum is: 15
