const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        default: 'default category description',
    },
    image: {
        type: String,
        default: '/images/default-category-image.jpg',
        attributes: [
            { key: { type: String }, value: [{ type: String }] },
        ],
    }
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;