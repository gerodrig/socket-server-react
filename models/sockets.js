class Sockets {
    constructor(io) {
        this.io = io;
        this.socketEvents();
    }

    socketEvents() {
        //On connection
        this.io.on('connection', (socket) => {
        
            //listen to the client event
            socket.on('messageToServer', (data) => {
                console.log(data);
        
                //send the message to all the clients
                //io to all the clients socket.emit to just the client
                this.io.emit('messageToClient', data);
            });
        });
    }
}

module.exports = Sockets;