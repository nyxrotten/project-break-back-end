const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    nombre: String,
    descripción: String,
    imagen: String,
    categoria: {type: String, enum: ["Camisetas", "Pantalones", "Zapatos", "Accesorios"]},
    talla: {type: String, enum: ["XS", "S", "M", "L", "XL"]},
    precio: Number
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

module.exports = { Product };