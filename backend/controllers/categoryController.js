const Category = require('../models/categoryModel')

const getCategories = async (req, res, next) => {
    try {
        const categories = await Category.find().sort({ name: 1 }).orFail()
        res.json(categories)
    } catch (error) {
        next(error)
    }
}

module.exports = getCategories