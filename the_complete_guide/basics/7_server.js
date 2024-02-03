const http = require('http');

const routes = require('./7_routes');

const server = http.createServer(routes);

server.listen(3000, () => {
    console.log('Server is running on port 3000')
});