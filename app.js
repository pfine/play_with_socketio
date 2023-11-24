// dependency
const express = require('express');
const path = require('path');

// expose express
const app = express();

// setup server, by require http, and passing our app variable into http server
const server = require('http').Server(app);

// require socket.io, we passing server as parameter
const io = require('socket.io')(server);

// port number
const port = 8080;

// connection to public folder
app.use(express.static(path.join(__dirname, 'public')));

// Listening tp our server on defined port
server.listen(port, () => {
	console.log(`Listening on port: http://localhost:${port}`);
});
