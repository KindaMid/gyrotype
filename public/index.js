const socket = io();
var code = Math.floor(1000 + Math.random() * 9000);

document.getElementById('JoinBtn').addEventListener('click', () => {
    var HName = document.getElementById('HostName').value;
    socket.emit('StartGame', { room: code , HostName: HName});
});

socket.on('connectToRoom',function(data){
    document.getElementById('NumberCode').innerHTML = data;
 });

//function every time a new player joins
//adds a new text element with the player name and stuff