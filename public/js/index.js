var socket = io();

socket.on("connect",function (){
  console.log("successful to connect to server");

});

socket.on("disconnect",function (){
  console.log("disconnect from server");
});


socket.on('newMessage',function (message){
  console.log("new Message",message);
});
