const shopRouter = require('express').Router();

shopRouter.get("/", (req, res, next) => {
    res.send("<h1>Hello from Express!</h1>");
});

module.exports = shopRouter;