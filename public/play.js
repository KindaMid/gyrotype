const socket = io();
var HostNamed = '';

document.getElementById('JoinBtn').addEventListener('click', () => {
    var TriedThisCode = document.getElementById('CodeInput').value;
    var PName = document.getElementById('NameInput').value;
    socket.emit('PlsLetMeJoin', { InputCode: TriedThisCode , PlayerName: PName});
});

socket.on('JoinConfirmed', (data) => {
//Add Text Saying who is currently in the game: host + player basically
});

socket.on('Broadcast_HostName', (data) => {
    var HostNamed = data.NameHost;
    var SetHostNameElement = document.getElementById("Host");
    var InputHostName = document.createTextNode(HostNamed.toString());

    SetHostNameElement.appendChild(InputHostName);
});