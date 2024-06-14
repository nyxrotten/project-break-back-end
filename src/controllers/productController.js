const { all } = require("axios");
const { Product } = require("../models/Product");


const htmlHeader = () => {
    const htmlCode = `
        <!DOCTYPE html>
            <html lang="en">
            <head>
            <link rel="stylesheet" href="/styles.css">
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
            </head>
    `;
    return htmlCode;
};

const generateMenu = () => {
    const menu = `
    <nav class="nav">
            <ul>
            <li><a href="/products/category/tshirts">T-Shirts</a></li>
            <li><a href="/products/category/sweatshirts">Sweatshirts</a></li>
            <li><a href="/products/category/pijamas">Pijamas</a></li>
            <li><a href="/products/category/socks">Socks</a></li>
            <li><a href="dashboard/login">Login</a></li>
            </ul>
        </nav>
    `;
    return menu;
};


const generateProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        const producto = `
        ${htmlHeader()}
            <body>
                <main id="cardPage"
                <section id="productCard">
                    <img src="${product.image}">
                    <h3>Name: ${product.name}</h3>
                    <h4>Description: ${product.description}</h4>
                    <h3>Size: ${product.size}</h3>
                    <h3>Price: ${product.price} €</h3>
                    <h3>Units: ${product.units}</h3>
                </section>
                <a id="home" href="/products">HOME</a>
                </main>
            </body>`;
        
        res.status(200).send(producto);
    } catch (error) {
        res.status(500).json({ message: "Error finding product by id" });
    }
};


const generateHomePage = async (req, res) => {
    try {
        const home = `
        ${htmlHeader()}
        <body>
        ${generateMenu()}
        </body>
        </html>
        `;
        res.status(201).send(home);
    } catch (error) {
        res.status(500).json({message: "Error loading homepage"})
    }
};

const generateDashboard = async (req, res) => {
    try {
    const dashboard = `
        ${htmlHeader()}
        <body>
        ${generateMenu()}
        <h1>Dashboard</h1>
        </body>
        </html>
        `;
        res.status(200).send(dashboard);
    } catch (error) {
        res.status(500).json({message: "Error loading dashboard"})
    }
};

const newProductForm = async (req, res) => {
    try {
    const productForm = `
        ${htmlHeader()}
        <body>
        <section class="formSection">
        <form class="newForm" action="/dashboard" method="post">
            <h3>New product</h3>
            <label for="nameValue">Name</label>
            <input type="text" class="form" id="nameValue" name="name"><br>
            <label for="description">Description</label>
            <input type="text" class="form" id="imageValue" name="image"><br>
            <label for="image">Image</label>
            <input type="text" class="form" id="descriptionValue" name="description"><br>
            <label for="category">Category</label>
            <input type="text" class="form" id="categoryValue" name="category"><br>
            <label for="size">Size</label>
            <input type="text" class="form" id="sizeValue" name="size"><br>
            <label for="units">Units</label>
            <input type="text" class="form" id="priceValue" name="price"><br>
            <label for="price">Price</label>
            <input type="text" class="form" id="unitsValue" name="unit">
            <button  id="submitButton">New Product</button>
        </form>
        </section>
        </body>
        </html>
    `;
    res.status(200).send(productForm);
    } catch (error) {
        res.status(500).json({message: "Error loading form"})
    };
};


const generateProductsByCategory = async (req, res) => {
    try {
        const { productCategory } = req.params;
        const products = Product.find({category: productCategory});

        const generateProducts = `
        ${htmlHeader()}
        <body>
        ${generateMenu()}
        </body>
        </html>
        `;
       console.log(generateProducts)
        res.status(201).send(generateProducts);
        
       
        
        
        
    } catch (error) {
        res.status(500).json({message: "Error generate products by category"})
    }
};

const editProductPage = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        const generateEditPage =
        `${htmlHeader()}
        <body>
            <main id="cardPage"
            <section id="productCard">
                <img src="${product.image}">
                <label for="newImage" class="editLabel"></label>
                <input type="text" id="newImage" class="editInput" placeholder="${product.image}">
                <button  class="edit" id="editImage"">Edit image</button>
                
                <label for="newName" class="editLabel"></label>
                <input type="text" id="newName" class="editInput" placeholder="${product.name}">
                <button  class="edit" id="editName"">Edit name</button>

                <label for="newDescription" class="editLabel"></label>
                <input type="text" id="newDescription" class="editInput" placeholder="New description">
                <button  class="edit" id="editDescription"">Edit description</button>

                <label for="newSize" class="editLabel"></label>
                <input type="text" id="newSize" class="editInput" placeholder="${product.size}">
                <button  class="edit" id="editSize"">Edit size</button>

                <label for="newPrice" class="editLabel"></label>
                <input type="text" id="newPrice" class="editInput" placeholder="${product.price}">
                <button  class="edit" id="editPrice"">Edit price</button>

                <label for="newUnits" class="editLabel"></label>
                <input type="text" id="newUnits" class="editInput" placeholder="${product.price}">
                <button  class="edit" id="editUnits"">Edit units</button>

                <button id="editSave">SAVE</button>
                <button id="deleteProduct">DELETE</button>

                <a id="goDashboard" href="/dashboard">DASHBOARD</a>
            </section>
            </main>
            <script>
                const deleteButton = document.getElementById("deleteProduct");
                deleteButton.addEventListener("click", console.log("hola"))
            </script>
        </body>`;
        res.status(201).send(generateEditPage);
    } catch (error) {
        res.status(500).json({message: "Error finding product by id"})
    }
};

const generateLogIn = async (req, res) => {
    try {
    const logIn = `
    ${htmlHeader()}
        <section id="logInFormBox">
            <form id="logInForm">
                <label for="username">Username</label>
                <input id="username">
                <label for="password">Password</label>
                <input id="password">
                <button id="logInButton">Log In</button>
            </form>
            <form id="registerForm">
                <label for="userReg">Username</label>
                <input id="userReg">
                <label for="passReg">Password</label>
                <input id="passReg">
                <button id="logInButton">Register</button>
            </form>
            <a href="/products" id="goDashboard">Home</a>
        </section>
        <body>`;
        res.status(200).send(logIn);
    } catch (error) {
        res.status(500).json({message: "Error loading login form"})
    }
};

const deleteById = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.status(404).send("Id not found");
        }
        const productDeleted = `
        ${htmlHeader}
        <h2>Item deleted</h2>
        `
        res.status(200).redirect(productDeleted);
    } catch (error) {
        console.log(error);
        res.send(500).send("Error deleting id");
    }
}


module.exports = {
    generateDashboard,
    newProductForm,
    generateHomePage,
    generateProductById,
    generateProductsByCategory,
    editProductPage,
    generateLogIn,
    deleteById
    };