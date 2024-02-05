const adminRouter = require('express').Router;

adminRouter.get("/add-product", (req, res, next) => {
    res.send("<form action='/product' method='POST'><input type='text' name='title'><button type='submit'>Add Product</button></form>");
});

adminRouter.post("/product", (req, res, next) => {
    console.log(req.body);
    res.redirect("/");
});

module.exports = adminRouter;
