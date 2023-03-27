const express = require('express')
const router = express.Router()
const { getUsers, getUser, registerUser, loginUser, updateUserProfile, getUserProfile, writeReview, updateUser, deleteUser } = require('../controllers/userController')
const { verifyIsLoggedIn, verifyIsAdmin } = require('../middleware/verifyAuthToken')

router.post('/register', registerUser)
router.post('/login', loginUser)


// user logged in routes
router.use(verifyIsLoggedIn)
router.put('/profile', updateUserProfile)
router.get('/profile/:id', getUserProfile)
router.post('/review/:productId', writeReview)

// admin routes
router.use(verifyIsAdmin)
router.get('/', getUsers)
router.get('/:id', getUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)

module.exports = router
