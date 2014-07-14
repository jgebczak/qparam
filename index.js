var http = require("http");

// When a server receives a request, it will fire a function(request,response) provided to http.createServer.
// My code extends the "request" part of it, so we can get passed query params simply by calling .param(name) on it.

http.IncomingMessage.prototype.param = function(name)  {

  var url = require('url');
  var url_parts = url.parse(this.url, true);
  var query = url_parts.query;
  return query[name];

}
