// get the http module:
var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');
var route_lib = require('./routelib.js');
// creating a server using http module:
var server = http.createServer(function (request, response){
    // see what URL the clients are requesting:
    console.log('client request URL: ', request.url);
    route_lib.static_contents(request,response);
    // this is how we do routing:
    
});
// tell your server which port to run on
server.listen(8000);
// print to terminal window
console.log("Running in localhost at port 8000");