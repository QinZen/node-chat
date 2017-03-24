const path = require("path");
const express = require("express");
const socketIO =require("socket.io");
const http = require("http");

var app = express();
const publicPath = path.join(__dirname,'../public');
const PORT = process.env.PORT || 3000;

var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on("connection",(socket)=>{
  console.log("New user connected");

  socket.on("disconnect",()=>{
    console.log("User was disconnected");
  });
});

server.listen(PORT,()=>{
  console.log(`start up server on PORT ${PORT}!`);
});
