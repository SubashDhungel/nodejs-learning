// Use fs.promises for promise-based API
const fs = require('fs').promises;

async function fileOperations() {
  try {
    // Write to file
    await fs.writeFile('example.txt', 'Hello Node.js!');
    console.log('File written!');

    // Append to file (non-destructive)
    await fs.appendFile('example.txt', '\nNew content added!');
    
    // Read file
    const data = await fs.readFile('example.txt', 'utf8');
    console.log('File content:', data);
  } catch (err) {
    console.error('Error:', err.message);
  }
}

fileOperations();