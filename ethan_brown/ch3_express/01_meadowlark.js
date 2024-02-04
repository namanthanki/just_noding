const express = require("express");

const app = express();

const port = 3000 || 5000 || 8080;
const hostname = "127.0.0.1";

app.get("/", (req, res) => {
    res.type("text/plain");
    res.send("Meadowlark Travel");
});

app.get("/about", (req, res) => {
    res.type("text/plain");
    res.send("About Meadowlark Travel");
});

// custom 404 page (middleware)
app.use((req, res) => {
    res.type("text/plain");
    res.status(404);
    res.send("404 - Not Found");
});

// custom 500 page (middleware)
app.use((err, req, res, next) => {
    console.error(err.message);
    res.type("text/plain");
    res.status(500);
    res.send("500 - Internal Server Error");
});

// start the server
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
