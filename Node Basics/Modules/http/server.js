const http = require('http');

// Create the server
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        // Set the response header and send the response
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome to the Home Page!');
    } else if (req.url === '/about') {
        // Set the response header and send the response
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('This is the About Page.');
    } else {
        // Set the response header and send the 404 response
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

// Start the server
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});