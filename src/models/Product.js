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

function getProductCards(products) {
    let html = '';
    for (let product of products) {
        html += `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p>${product.price}€</p>
            <a href="/products/${product._id}">Ver detalle</a>
        </div>
        `;
    }
    return html;
};

module.exports = {
    Product,
    getProductCards
};