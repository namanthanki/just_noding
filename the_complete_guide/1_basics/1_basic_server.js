const http = require('http');

const server = http.createServer((req, res) => {
    // you can log inside req and res to see the properties and methods available
    console.log(req.url, req.method, req.headers);
    res.end('Hello from the server!');
});

server.listen(3000, () => {
    console.log('Server is running on port 3000')
});