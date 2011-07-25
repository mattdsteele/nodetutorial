var http = require('http');
var url = require('url');

function start(route, handle) {
  onRequest = function(request, response) {
    var path = url.parse(request.url).pathname;
    console.log("request received for " + path);
    route(handle, path, request, response);
  };

  http.createServer(onRequest).listen(8888);
  console.log("Job has started.");
}

exports.start = start;
