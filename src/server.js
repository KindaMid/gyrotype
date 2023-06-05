const express = require("express");
const app = express();
var http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);


process.on('uncaughtException', console.error);
process.on('uncaughtRejection', console.error);

app.use(express.static("public"));

// listen to events from clients
io.on("connect", (socket) => {
    console.log("a user connected");

    socket.on('ping', (data) => {
        console.log("you are ", data.name);
        socket.emit("pong", { age: 20});
    });

    // socket.emit is for only one client
    // io.emit is for everyone connected

    socket.on("disconnect", () => {
        console.log("we lost a user");
    });
});

server.listen(3000, () => {
	console.log("Server Started")
});