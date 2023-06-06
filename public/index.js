const socket = io();
var code = Math.floor(1000 + Math.random() * 9000);
var HName = '';

document.getElementById('JoinBtn').addEventListener('click', () => {
    HName = document.getElementById('HostName').value;
    socket.emit('StartGame', { room: code , HostName: HName});
});

socket.on('connectToRoom',function(data){
    document.getElementById('NumberCode').innerHTML = data;
 });

 socket.on('UserJoiningBroadcast',function(data){
    var BroskiName = data.name;
    document.getElementById('NamePlayer').innerHTML = BroskiName.toString();
 });

 socket.on('WhatIsHostName',function(){
    socket.emit('HostNameSend', { MyHostName: HName });
 });