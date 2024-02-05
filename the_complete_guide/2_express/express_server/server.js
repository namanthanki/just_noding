const bodyParser = require('body-parser');
const express = require('express');

const app = express();

const port = 3000 || 5000 || 8080;
const hostname = "127.0.0.1";

// body-parser middleware 
// parse application/json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/add-product", (req, res, next) => {
    res.send("<form action='/product' method='POST'><input type='text' name='title'><button type='submit'>Add Product</button></form>");
});

app.use("/product", (req, res, next) => {
    console.log(req.body);
    res.redirect("/");
});

app.use("/", (req, res, next) => {
    res.send("<h1>Hello from Express!</h1>");
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});