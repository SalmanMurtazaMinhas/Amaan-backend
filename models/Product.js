const { Decimal128 } = require('bson')
const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    name: String,
    description: String,
    price: Decimal128,
    category: String,
    image: String,
    created_at: String,
    status: String

})

const Product = mongoose.model('Product', productSchema)

module.exports = Product