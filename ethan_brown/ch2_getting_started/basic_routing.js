const http = require("http");
const port = 3000 || 5000 || 8080;
const hostname = "127.0.0.1";

const requestHandler = (req, res) => {
    // remove any query string and convert to lowercase
    const path = req.url.replace(/\/?(?:\?.*)?$/, "").toLowerCase();
    switch (path) { // switch on the path
        case "": // if the path is empty, send the response "Homepage"
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end("Homepage");
            break;
        case "/about": // if the path is "/about", send the response "About"
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end("About");
            break;
        default: // if the path is not empty or "/about", send the response "Not Found"
            res.writeHead(404, { "Content-Type": "text/plain" });
            res.end("Not Found");
            break;
    }
}

const server = http.createServer(requestHandler);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});