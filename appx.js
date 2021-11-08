const http = require('http');
const port = 4000;
const employee = require('./emp')

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/JSON' }); // http header
    var url = req.url;
    if (url === '/about') {
        res.write('about us page'); //write a response
        res.end();
    } else if (url === '/contact') {
        res.write("contact us on  page");
        res.end();
    } else if (url === '/api/emp') {
        res.write(JSON.stringify(employee));
        res.end();
    } else {
        res.write('Hello World!');
        res.end();
    }
}).listen(4000, function () {
    console.log("server start at port 4000"); //the server object listens on port 4000
});