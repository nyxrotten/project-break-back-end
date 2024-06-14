const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    image: String,
    category: {type: String, enum: ["tshirts", "sweatshirts", "pijamas", "socks"], required: true},
    size: {type: String, enum: ["XS", "S", "M", "L", "XL"]},
    price: Number,
    units: Number
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

module.exports = { Product };

