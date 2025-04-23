const path = require('path');

// Join path segments
const fullPath = path.join('/users', 'john', 'documents', 'file.txt');
console.log(fullPath); // '/users/john/documents/file.txt'

// Get file extension
console.log(path.extname('index.html')); // '.html'

// Get the base name
console.log(path.basename('/users/test/file.txt')); // 'file.txt'

// Get directory name
console.log(path.dirname('/users/test/file.txt')); // '/users/test'