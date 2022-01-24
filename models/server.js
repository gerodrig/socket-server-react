//Express server
const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const path = require('path');
const Sockets = require('./sockets');

class Server {
	constructor() {
		this.app = express();
		this.port = process.env.PORT;

		//Http server
		this.server = http.createServer(this.app);
		//socket configurations
		this.io = socketio(this.server, {
			/*Configurations */
		});
	}

	middlewares() {
		//Deploy public directory
		this.app.use(express.static(path.resolve(__dirname, '../public')));
	}

	configureSockets() {
		new Sockets(this.io);
	}

	execute() {
		//initialize middlewares
		this.middlewares();
		//Initialize socket
		this.configureSockets();
		//initialize server
		this.server.listen(this.port, () => {
			console.log(`Server listening on port ${this.port}`);
		});
	}
}

module.exports = Server;
