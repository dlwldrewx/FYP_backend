const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    imageUrl: { type: String }, // URL of product image
    stock: { type: Number, default: 0 },
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
