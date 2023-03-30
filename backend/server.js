const express = require('express')
const fileUpload = require('express-fileupload')
const app = express()
const cookieParser = require('cookie-parser')
const { createServer } = require('http')
const { Server } = require('socket.io')



const httpServer = createServer(app)
global.io = new Server(httpServer)

app.use(express.json())
app.use(cookieParser())
app.use(fileUpload())

const admins = [];
let activeChats = [];
function get_random(array) {
  return array[Math.floor(Math.random() * admins.length)];
}


io.on("connection", (socket) => {
  socket.on("admin connected", (admin) => {
    admins.push({ id: socket.id, admin: admin })
  })
  socket.on("client sends message", (msg) => {
    if (admins.length === 0) {
      socket.emit("no admin", "No admin is currently available, please try again later.")
    } else {
      let client = activeChats.find((client) => item.clientId === socket.id)
      let targetAdminId;
      if (client) {
        targetAdminId = client.adminId;
      } else {
        let admin = get_random(admins);
        activeChats.push({ clientId: socket.id, adminId: admin.id });
        targetAdminId = admin.id;
      }

      socket.broadcast.to(targetAdminId).emit("server sends message from client to admin", {
        user: socket.id,
        message: msg,
      })
      return;
    }
  })
  socket.on("admin sends message", ({ user, message }) => {
    
    socket.broadcast.to(user).emit("server sends message from admin to client", message);
  })

socket.on("admin disconnect", (socketId) => {
  socket.broadcast.to(socketId).emit("admin disconnected", "");
  let client = io.sockets.sockets.get(socketId);
  client.disconnect();
})

  socket.on("disconnect", (reason) => {
    // admin disconnect
    const removeIndex = admins.findIndex((item) => item.id === socket.id);
    if (removeIndex !== -1) {
      admins.splice(removeIndex, 1);
    }
    activeChats = activeChats.filter((item) => item.adminId !== socket.id);
    // user disconnect
    const removeIndex2 = activeChats.findIndex((item) => item.clientId === socket.id);
    if (removeIndex2 !== -1) {
      activeChats.splice(removeIndex2, 1);
    }
    socket.broadcast.emit("disconnected", {reason: reason, socketId: socket.id});
  })
});

const apiRoutes = require('./routes/apiRoutes')

app.get('/', async (req, res, next) => {
  res.json({ message: "API is working" })
})

//mongodb 

const connectDB = require('./config/db')
connectDB();

app.use('/api', apiRoutes)

app.use((error, req, res, next) => {
  if (process.env.NODE_ENV === "development") {
    console.error(error);
  }
  next(error);
});
app.use((error, req, res, next) => {
  if (process.env.NODE_ENV === "development") {
    res.status(500).json({
      message: error.message,
      stack: error.stack,
    });
  } else {
    res.status(500).json({
      message: error.message,
    })
  }
});

const PORT = process.env.PORT || 5000;

httpServer.listen(PORT, () => { console.log(`Server running on port ${PORT}`) })
