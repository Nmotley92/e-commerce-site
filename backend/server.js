const express = require('express')
const app = express()
const port = 3000
const apiRoutes = require('./routes/apiRoutes')


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