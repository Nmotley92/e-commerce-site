const express = require('express')
const app = express()
const port = 3000
const apiRoutes = require('./routes/api-routes')


app.get('/', (req, res) => {
   res.json({message: "API is working"})
})

app.use ('/api', apiRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});