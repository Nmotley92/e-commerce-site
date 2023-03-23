const connectDB = require("../config/db")
connectDB()

const categoryData = require("./categories")
const productData = require("./products")
const reviewData = require("./reviews")

const Category = require("../models/CategoryModel")
const Product = require("../models/ProductModel")
const Review = require("../models/ReviewModel")

const importData = async () => {
    try {
        await Category.collection.dropIndexes()
        await Product.collection.dropIndexes()

        await Category.collection.deleteMany({})
        await Product.collection.deleteMany({})
        await Review.collection.deleteMany({})

        await Category.insertMany(categoryData)
        await Product.insertMany(productData)
        await Review.insertMany(reviewData)

        console.log("Data imported successfully")
        process.exit()
    } catch (error) {
        console.error("Failed to import data", error)
        process.exit(1);
    }
}
importData()
 
