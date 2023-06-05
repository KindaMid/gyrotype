const io = require("socket.io-client");
const socket = io();

document.getElementById('pingBtn').addEventListener('click', () => {
    socket.emit('ping', { name: "mid" });
});

socket.on("pong", (data) => {
    console.log("Enough games ", data.age);
});