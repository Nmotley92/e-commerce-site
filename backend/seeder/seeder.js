const connectDB = require("../config/db")
connectDB()

const categoryData = require("./categories")
const productData = require("./products")
const reviewData = require("./reviews")
const userData = require("./users")
const orderData = require("./orders")

const Category = require("../models/CategoryModel")
const Product = require("../models/ProductModel")
const Review = require("../models/ReviewModel")
const reviews = require("./reviews")
const User = require("../models/UserModel")
const Order = require("../models/OrderModel")


const importData = async () => {
    try {
        await Category.collection.dropIndexes()
        await Product.collection.dropIndexes()

        await Category.collection.deleteMany({})
        await Product.collection.deleteMany({})
        await Review.collection.deleteMany({})
        await User.collection.deleteMany({})
        await Order.collection.deleteMany({})

        await Category.insertMany(categoryData)
        const reviews = await Review.insertMany(reviewData)
        const sampleProducts = productData.map((product) => {
            reviews.map((review) => {
                product.reviews.push(review._id)
            })
            return { ...product }
        });
        await Product.insertMany(sampleProducts)
        await User.insertMany(userData)
        await Order.insertMany(orderData)

        console.log("Data imported successfully")
        process.exit()
    } catch (error) {
        console.error("Failed to import data", error)
        process.exit(1);
    }
}
importData()

