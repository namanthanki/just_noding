const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;

    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/message' && req.method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });

        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const message = parsedBody.split('=')[1];
            fs.writeFileSync('./temp_data/message.txt', message); // writeFileSync blocks the event loop until the file is written
            // moving these lines inside the 'end' event listener ensures that the file is written only after the entire request body has been received
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        });
    }
    // however reading files take time and the server will not wait for the file to be written before sending the response
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from the server!</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(3000, () => {
    console.log('Server is running on port 3000')
});