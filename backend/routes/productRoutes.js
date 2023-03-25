const express = require('express')
const router = express.Router()
const { getProducts, getProductById, getBestsellers, adminGetProducts } = require('../controllers/productController')

router.get('/', getProducts)
router.get('/category/:categoryName', getProducts)
router.get('/category/:categoryName/search/:searchQuery', getProducts)
router.get('/search/:searchQuery', getProducts)
router.get('/bestsellers', getBestsellers)
router.get('/get-one/:id', getProductById)
router.get('/admin', adminGetProducts)


module.exports = router