// * Using the previous example as a guide, create an app that has two web servers.
// * One that listens on port 7000 and one that listens on port 7500.
// * The one listening on port 7000 will always tell the user something good about themselves.
// * The one listening on 7500 will always tell the user something bad about themselves.
// * Make sure you create a Github repo and commit this code!

// ** Bonus **
// * Generate the good / bad phrase randomly from a list of predefined phrases
// * Use the `twitter` package inside the response to also return a random tweet!


var http = require('http');

var PORT = 7000;


function handleRequests(request, response) {
  response.end(" It works! Pat yourself on the back, well done! " + request.url);

}

var server = http.createServer(handleRequests);

server.listen(PORT, function() {
  console.log("SERVER LISTENING ON: http://localhcdost:%s", PORT);
})


///////////////


var PORTWO = 7500;

function secondrequest(request, response) {
  response.end(" YOU ARE BAD2 " + request.url);

}

var servertwo= http.createServer(secondrequest);

servertwo.listen(PORTWO, function() {
  console.log("SERVER LISTENING ON: http://localhost:%s", PORTWO);
})