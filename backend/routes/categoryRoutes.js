const express = require('express')
const router = express.Router()
// const { getCategories, newCategory, deleteCategory, saveAttr } = require('../controllers/categoryController')
const { getCategories, newCategory } = require('../controllers/categoryController')

router.get('/', getCategories)

router.post('/', newCategory)

// router.delete('/:id', deleteCategory)

// router.put('/:id', saveAttr)

module.exports = router