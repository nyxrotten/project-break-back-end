const {Product} = require('../models/Product');


const generateHomePage = () => {
    const home = `
        <h1>Home</h1>
        <nav class="nav">
            <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">T-Shirts</a></li>
            <li><a href="#">Trousers</a></li>
            <li><a href="#">Shoes</a></li>
            <li><a href="#">Accesories</a></li>
            <li><a href="#">Login</a></li>
            </ul>
        </nav>
        <h1>Home</h1>
        <section class="productBox">
            <div class="productBox shoes">
                <h2>Shoes</h2>
                <img>
                <button>See</button>
            </div>
            <div class="productBox shirt">
                <h2>T-shirts</h2>
                <img>
                <button>See</button>
            </div>
            <div class="productBox trou">
                <h2>Shoes</h2>
                <img>
                <button>See</button>
            </div>
            <div class="productBox accesory">
                <h2>Shoes</h2>
                <img>
                <button>See</button>
            </div>
        </section>
        `
    return home;
};


const generateDashboard = () => {
    const dashboard = `<h1>Dashboard</h1>`
    return dashboard; 
};


const newProductForm = () => {
    const productForm = `
        <form action="/dashboard" method="post">
            <label for="name">Name</label>
            <input type="text" class="form" id="nameValue" required><br>
            <label for="description">Description</label>
            <input type="text" class="form" id="descriptionValue" required><br>
            <label for="category">Category</label>
            <input type="text" class="form" id="categoryValue" required><br>
            <label for="size">Size</label>
            <input type="text" class="form" id="sizeValue" required><br>
            <label for="units">Units</label>
            <input type="text" class="form" id="unitsValue" required>
            <button type="submit" id="submitButton">Send</button>
        </form>
        <script>
           const boton = document.getElementById("submitButton");
           function action() {
            alert("Hello!");
};
           boton.addEventListener("click", action)
            
        </script>
    `;
    return productForm;
};

const generateProduct = (id) => {
    const product = `<p>${id}</p>
    `
    return product
}

module.exports = {
    generateDashboard,
    newProductForm,
    generateHomePage,
    generateProduct
}

function fetchData() {
    fetch("http://localhost:8080/dashboard/new")

    .then()
};

fetchData()