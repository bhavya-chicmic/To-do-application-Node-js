var http = require('http'),
    url = require('url');
http.createServer(function (req, res) {
    var query = url.parse(req.url,true).query;
    res.end(JSON.stringify(query));
}).listen(3333);
console.log("Server running at http://localhost:3333/");