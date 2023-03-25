const express = require('express')
const router = express.Router()
const { getProducts, getProductById, getBestsellers } = require('../controllers/productController')

router.get('/', getProducts)
router.get('/category/:categoryName', getProducts)
router.get('/category/:categoryName/search/:searchQuery', getProducts)
router.get('/search/:searchQuery', getProducts)
router.get('/bestsellers', getBestsellers)
router.get('/:id', getProductById)


module.exports = router