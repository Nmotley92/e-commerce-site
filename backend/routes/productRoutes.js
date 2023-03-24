const express = require('express')
const router = express.Router()
const getProducts = require('../controllers/productController')

router.get('/', getProducts)
router.get('/category/:categoryName', getProducts)

module.exports = router