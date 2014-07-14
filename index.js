var http = require("http");

http.IncomingMessage.prototype.param = function(name)  {

  var url = require('url');
  var url_parts = url.parse(this.url, true);
  var query = url_parts.query;
  return query[name];

}
