const http = require("http");
const fs = require("fs");
const port = 3000 || 5000 || 8080;
const hostname = "127.0.0.1";

// The serveStaticFiles() function is used to serve static files
// The function takes four arguments: res (the response object), path (the path to the file), contentType (the content type of the file), and responseCode (the HTTP status code of the response)
const serveStaticFiles = (res, path, contentType, responseCode = 200) => {
    // The fs.readFile() method is used to read the file
    // The method takes three arguments: the path to the file, a callback function, and an optional encoding
    // The callback function takes two arguments: err (an error object) and data (the contents of the file)
    fs.readFile(__dirname + path, (err, data) => {
        if(err) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            return res.end("500 - Internal Error");  
        }
        res.writeHead(responseCode, { "Content-Type": contentType });
        res.end(data);
    });
}

const requestHandler = (req, res) => {
    const path = req.url.replace(/\/?(?:\?.*)?$/, "").toLowerCase();
    switch (path) {
        case "":
            serveStaticFiles(res, "/public/home.html", "text/html");
            break;
        case "/about":
            serveStaticFiles(res, "/public/about.html", "text/html");
            break;
        default:
            serveStaticFiles(res, "/public/404.html", "text/html", 404);
            break;
    }
}

const server = http.createServer(requestHandler);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});