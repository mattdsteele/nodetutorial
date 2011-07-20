var http = require('http');
var url = require('url');

function start(route) {
  onRequest = function(request, response) {
    var path = url.parse(request.url).pathname;
    console.log("request received for " + path);

    route(path);

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello, world!");
    response.end();
  };
  http.createServer(onRequest).listen(8888);
  console.log("Job has started.");
}

exports.start = start;
