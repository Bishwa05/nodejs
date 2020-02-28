var http = require('http');
var server = new http.Server(); 
server.on("connection", function(socket) {
    console.log("Client arrived: " + new Date()); socket.on("end", function() {
    console.log("Client left: " + new Date()); 
    });
}) 
server.listen(1111);


server.on("request", function(request, response) {
    request.setEncoding("utf8"); request.on("readable", function() {
    console.log(request.read()) 
    });
});

/**
 * Test it by curl
 * curl http://localhost:1111 -d "Here is some data"
 */
    