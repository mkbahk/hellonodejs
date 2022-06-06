var os = require('os');

var http = require('http');
var handleRequest = function(request, response) {
  response.writeHead(200);
  response.end("What's up, man! I'm "+os.hostname()+", running by Moon-Kee Bahk.");
  //log
  console.log("["+Date(Date.now()).toLocaleString()+"] "+os.hostname());
}

var www = http.createServer(handleRequest);
www.listen(7777);
