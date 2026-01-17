/*
=========================================
Node HTTP Server Demo
=========================================

A simple Node.js HTTP server that handles
basic routes and API responses.

Developed by sudo_0xksh
=========================================
*/

const http = require('http');

const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.write('Hello World');
        res.end();
    }

    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }

});

server.listen(3000);

console.log("=========================================");
console.log("Server running on port 3000");
console.log("Developed by sudo_0xksh");
console.log("=========================================");
