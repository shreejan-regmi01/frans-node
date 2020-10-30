const mongoose = require('mongoose')

const Image  = new mongoose.Schema({
    path: String,
    type: String,
    size: Number,
    folder: String,
    filename: String
})


const FurnitureSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['show', 'hide'],
        default: 'show',
        required: true
    },
    condition: {
        type: String,
        enum: ['new', 'used'],
        required: true
    },
    image: Image,
    category: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Category'
    }
})

module.exports = mongoose.model('Furniture', FurnitureSchema)