var http = require('http');
var url = require('url');

function start(route, handle) {
  onRequest = function(request, response) {
    var postData = "";
    var path = url.parse(request.url).pathname;
    console.log("request received for " + path);

    request.setEncoding("utf-8");
    request.addListener("data", function(chunk) {
        postData += chunk;
    });
    request.addListener("end", function() {
        route(handle, path, response, postData);
    });
  };

  http.createServer(onRequest).listen(8888);
  console.log("Job has started.");
}

exports.start = start;
