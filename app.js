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

// Create 1st connection, by edit app js in  - by opening up connection,
//   using io variable and specifying an event called as connection.
io.on('connection', (socket) => {
	// adding socket argument - used each tome we want to send and receive the message
	console.log(`new connection was made`);

	// use emit in on method as our primary method of handling events in socket.io
	// passing a string event-listener, and JSON object - sending greeting message send from server
	socket.emit('message-from-server'),
		{
			greeting: 'Hello from server',
		};
	// second event-listener that will listen for message from client
	// passing a string event-listener, and function that will grab message from client, and display in log message
	socket.listen('message-from-client', (msg) => {
		console.log(`message-from-client: ${msg}`);
	});
});

// Listening tp our server on defined port
server.listen(port, () => {
	console.log(`Listening on port: http://localhost:${port}`);
});
