const { Decimal128 } = require('bson')
const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    price: {type: Decimal128,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    image: String,
    created_at: String,
    status: String

})

const Product = mongoose.model('Product', productSchema)

module.exports = Product