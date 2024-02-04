const express = require("express");
const { create } = require("express-handlebars");

const app = express();

const port = 3000 || 5000 || 8080;
const hostname = "127.0.0.1";

const fortunes = [
    "Conquer your fears or they will conquer you.",
    "Rivers need springs.",
    "Do not fear what you don't know.",
    "You will have a pleasant surprise.",
    "Whenever possible, keep it simple.",
]

const hbs = create({
    defaultLayout: "main"
});

// set up handlebars view engine and views directory
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", "./views");

app.use(express.static(__dirname + "/public"));

// render the home page
app.get("/", (req, res) => {
    res.render("home");
});

// render the about page
app.get("/about", (req, res) => {
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    res.render("about", { fortune: randomFortune });
});

// custom 404 page (middleware)
app.use((req, res) => {
    res.status(404);
    res.render("404");
});

// custom 500 page (middleware)
app.use((err, req, res, next) => {
    console.error(err.message);
    res.status(500);
    res.render("500");
});

// start the server
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
