const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: [true, 'price must be provided']
    },
    featured: {
        type: Boolean,
        required: false
    },
    rating: {
        type: Number,
        default: 4.9
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    company: {
        type: String,
        enum: {
            values: ['apple', 'samsung', 'dell', 'mi', 'hp'],
            message: `{VALUE} is not supported`
        }
    }
});

module.exports = mongoose.model('Product', productSchema);