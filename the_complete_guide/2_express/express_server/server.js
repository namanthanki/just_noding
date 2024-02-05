const bodyParser = require('body-parser');
const express = require('express');
const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');

const app = express();

const port = 3000 || 5000 || 8080;
const hostname = "127.0.0.1";

// body-parser middleware 
// parse application/json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(adminRouter);
app.use(shopRouter);

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});