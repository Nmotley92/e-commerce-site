const Product = require('../models/productModel')

const getProducts = (req, res) => {
    Product.create({name: 'Panasonic'})
    res.send ('Handling Products routes')
    }

module.exports = getProducts