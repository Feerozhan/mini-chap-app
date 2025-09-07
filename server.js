const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const path = require("path");

const app = express();


app.use('/audio', express.static(path.join(__dirname, 'audio')));

const server = http.createServer(app);
const io = new Server(server);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});


const onlineUsers = {};

io.on('connection', (socket) => {
  console.log("User connected:", socket.id);


  socket.on('user joined', (user) => {
    onlineUsers[socket.id] = user.username;
  
    socket.broadcast.emit('user joined', user);
    

    io.emit('online users', onlineUsers);
  });
  

  socket.on('get online users', () => {
    socket.emit('online users', onlineUsers);
  });

  socket.on('disconnect', () => {
    console.log("User disconnected:", socket.id);
    
    if (onlineUsers[socket.id]) {
      const username = onlineUsers[socket.id];
      delete onlineUsers[socket.id];
   
      socket.broadcast.emit('user left', { id: socket.id, username: username });
     
      io.emit('online users', onlineUsers);
    }
  });
  
  socket.on("chat message", (msg) => {
    io.emit("chat message", msg); 
  });
});

server.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});