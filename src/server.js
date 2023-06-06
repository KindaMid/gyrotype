const express = require("express");
const app = express();
var http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

var AllCodes = [];


process.on('uncaughtException', console.error);
process.on('uncaughtRejection', console.error);

app.use(express.static("public"));

// listen to events from clients
io.on("connect", (socket) => {
    console.log("User Connected");

    socket.on('StartGame', (data) => {
        var GameCode = data.room;
        var OriginalName = data.HostName;
        console.log("Hello, " + OriginalName);

        if(AllCodes.includes(GameCode)) {
            console.log("Code Already exists");
            console.log(AllCodes);
        } else {
            AllCodes.push(GameCode);
            console.log("ok code is ", data.room);
            socket.join(data.room);
            io.sockets.in(data.room).emit('connectToRoom', GameCode);
        }
    });

    socket.on('PlsLetMeJoin', (data) => {
        var UserCode = data.InputCode;

        if(AllCodes.includes(UserCode)) {
            console.log("User is joining ", data.InputCode);
            socket.join(data.InputCode);
            socket.emit("JoinConfirmed");
        } else {
            console.log("code not found");
            console.log("All Codes are " + AllCodes);
            console.log("The Code you entered is " + UserCode);
        }
    });

    // socket.emit is for only one client
    // io.emit is for everyone connected

    socket.on("disconnect", () => {
        console.log("User Disconnected");
    });
});

server.listen(3000, () => {
	console.log("Server Started")
});