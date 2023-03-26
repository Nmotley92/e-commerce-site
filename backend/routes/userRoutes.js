const express = require('express')
const router = express.Router()
const { getUsers, registerUser, loginUser, updateUserProfile } = require('../controllers/userController')

router.post('/register', registerUser)
router.post('/login', loginUser)

// user logged in routes
router.use(verifyIsLoggedIn)
router.put('/profile', updateUserProfile)

// admin routes
router.use(verifyIsAdmin)
router.get('/', getUsers)

module.exports = router
