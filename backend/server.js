const express = require('express')
const fileUpload = require('express-fileupload')
const app = express()
const port = 3000
const apiRoutes = require('./routes/apiRoutes')
const cookieParser = require('cookie-parser')

app.use(express.json())
app.use(cookieParser())
app.use(fileUpload())

app.get('/', async (req, res, next) => {
  res.json({ message: "API is working" })
})

const connectDB = require('./config/db')
connectDB();

app.use('/api', apiRoutes)

app.use((error, req, res, next) => {
  res.status(500).json({ 
    message: error.message, 
    stack: error.stack 
  })
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});