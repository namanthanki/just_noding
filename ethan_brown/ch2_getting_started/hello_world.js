const http = require('http');

const port = 3000 || 5000 || 8080;
const hostname = "127.0.0.1";

// The createServer() method takes a request listener function as an argument
// The request listener function is executed whenever the server receives a request
const server = http.createServer((req, res) => {
    // The request listener function takes two arguments: req (the request object) and res (the response object)
    // The req object can be used to access the request's properties and the res object can be used to send a response
    // The writeHead() method of the res object is used to send an HTTP status code and a set of response headers to the client
    // The end() method of the res object is used to end the response process
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World!\n');
});

// The listen() method of the server object is used to bind the server to a specific port and hostname
// The server will listen for incoming connections on the specified port and hostname
// The server will call the callback function once the server is bound
// The callback function is used to print a message to the console
// The server will continue to listen for incoming connections until the process is terminated
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
