const express = require('express')
const fileUpload = require('express-fileupload')
const app = express()
const apiRoutes = require('./routes/apiRoutes')
const cookieParser = require('cookie-parser')
const { createServer } = require('http')
const { Server } = require('socket.io')

const httpServer = createServer(app)
global.io = new Server(httpServer)

app.use(express.json())
app.use(cookieParser())
app.use(fileUpload())

io.on("connection", (socket) => {
  socket.on("client sends message", (msg) => {
      console.log(msg);
  })
})

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

httpServer.listen(port, () => {console.log(`Server running on port ${port}`)})
