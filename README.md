QParam
======

A tiny module allowing you to read query params (from the URL) with a simple function call.

## Installation

    npm install qparam --save

## Usage

    var qparam = require('qparam');

Then, you can call function "param" method on each Request object of your server:

    var name = request.param('name')

See the example below.


## Example

  Type in your JS file (for example "server.js"):

    http.createServer(function(request,response){

        var name = request.param('name')
        response.end("Hello, "+name);

    }).listen(8888);


Start your server:

    nodejs server.js

Then paste the following in your browser:

    http://localhost:8888/?name=James

## Release History

* 0.1.0 Initial release