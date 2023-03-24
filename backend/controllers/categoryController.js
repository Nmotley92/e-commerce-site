const Category = require('../models/categoryModel')

const getCategories = async (req, res, next) => {
    try {
        const categories = await Category.find().sort({ name: 1 }).orFail()
        res.json(categories)
    } catch (error) {
        next(error)
    }
}

const newCategory = async (req, res, next) => {
    try {
        const {category} = req.body
        if(!category) {
            res.status(400).send("Please enter a category")
        }
        const categoryExists = await Category.findOne({name: category})
        if(categoryExists) {
            res.status(400).send("Category already exists")
        } else {
            const categoryCreated = await Category.create({
                name: category
            })
            res.status(201).send({categoryCreated: categoryCreated})
        }
    } catch (err) {
        next(err)
    }
}

module.exports = { getCategories, newCategory }

// module.exports = {getCategories, newCategory, deleteCategory, saveAttr}
