const Server = require("./models/server");
require('dotenv').config();

//Initialize Server
const server = new Server();

//execute server
server.execute();
