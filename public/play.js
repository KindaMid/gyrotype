const socket = io();

document.getElementById('JoinBtn').addEventListener('click', () => {
    var TriedThisCode = document.getElementById('CodeInput').value;
    socket.emit("PlsLetMeJoin", { InputCode: TriedThisCode });
});

socket.on('JoinConfirmed', (data) => {
//Add Text Saying who is currently in the game: host + player basically
});