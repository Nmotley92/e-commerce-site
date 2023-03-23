const connectDB = require('../config/db');
connectDB();

const categoryData = require('./categories');
const Category = require('../models/CategoryModel');

const importData = async () => {
    try {
        await Category.collection.deleteMany({});
        await Category.insertMany(categoryData);
        console.log('Data imported');
        process.exit();
    } catch (error) {
        console.error("Error with data import", error);
        process.exit(1);
    }
};

importData();
