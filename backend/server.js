const express = require('express')
const app = express()
const port = 3000
const apiRoutes = require('./routes/apiRoutes')


app.get('/', async (req, res, next) => {
  const Product = require('./models/ProductModel')
  try {
    const product = new Product
    product.name = 'test'
    const savedProduct = await product.save()
    console.log(savedProduct === product)
    const products = await Product.find()
    console.log(products.length)
    res.send(' New product added ' +  product._id)
  } catch (err) {
    next(err)
  }
  // res.json({ message: "API is working" })
})

const connectDB = require('./config/db')
connectDB();

app.get('/a', (req, res, next) => {
  setTimeout(() => {
    try {
      console.log('asynchronous code');
    } catch (err) {
      next(err);
    }
  }, 1000)
});

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