const express = require('express')
const router = express.Router()
const getProducts = require('../controllers/productController')

router.get('/', getProducts)
router.get('/category/:categoryName', getProducts)

//admin
router.use(verifyIsLoggedIn);
router.use(verifyIsAdmin);
router.get('/admin', adminGetProducts);
router.delete("/admin/:id", adminDeleteProduct);
router.put("/admin/:id", adminUpdateProduct);
router.post("/admin/upload", adminUpdateProduct);
router.post("/admin", adminCreateProduct);


module.exports = router