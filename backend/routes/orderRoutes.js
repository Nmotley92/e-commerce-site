const express = require('express')
const router = express.Router()
const { verifyIsLoggedIn, verifyIsAdmin } = require('../middleware/verifyAuthToken')
const getUserOrders = require('../controllers/orderController')

// user routes
router.use(verifyIsLoggedIn)
router.get('/', getUserOrders)

// admin routes
router.use(verifyIsAdmin)

module.exports = router