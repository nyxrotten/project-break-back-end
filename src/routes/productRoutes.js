const express = require("express");
const router = express.Router();
const {Product} = require('../models/Product');
const { generateDashboard, newProductForm , generateHomePage, generateProduct} = require("../controllers/productController");

//Esta función crea un producto en la base de datos, sin el schema.
router.post("/create", async(req, res) => {
    try {
        const post = await Product.create(req.body);
        res.status(201).send(post);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "There was a problem trying to create a new product" });
    }
});

//Devuelve todos los productos.
router.get('/products', async (req, res) => {
    try {
    //const products = await Product.find();
    const generateHome = await generateHomePage();
    res.status(201).send(generateHome);
    console.log("Getting products");
    } catch (error) {
        res.status(500).json({message: "Error getting products"})
    }
})

//Devuelve el detalle de un producto.
router.get('/products/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const generateHome = await generateProduct(id);
        const product = await Product.findById(id);
       
       console.log(product.nombre)
        res.status(201).send(generateHome);

    
    } catch (error) {
        res.status(500).json({message: "Error finding product by id"})
    }
});

router.get('/products/categoria/', async (req, res) => {
    try {
        const {categoria} = req.params;
        const product = await Product.categoria;
        console.log(Product.categoria)
        res.status(201).send(product);
    } catch (error) {
        res.status(500).json({message: "Error finding product by id"})
    }
});

//Dashboard del administrador con todos los artículos linkados
router.get('/dashboard', async (req, res) => {
    try {
        const dashboard = await generateDashboard();
        res.status(201).send(dashboard);
        } catch (error) {
            res.status(500).json({message: "Error"})
        }
});

//Elimina un producto por id
router.delete('/dashboard/:id/delete', async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.status(404).send("Id not found");
        }
        res.status(200).send({ message: "Id deleted!" });
    } catch (error) {
        console.log(error);
        res.send(500).send("Error deleting id");
    }
});


router.post('/dashboard', async (req, res) => {
    try {
        const post = await Product.create(req.body);
        res.status(201).send(post);
        console.log("Getting dashboard");
        } catch (error) {
            res.status(500).json({message: "Error getting products"})
        }
});

//Formulario para actualizar el producto en el admin
router.get('/dashboard/new', async (req, res) => {
    try {
        const productForm = await newProductForm();
        res.status(201).send(productForm);

    } catch (error) {
        res.status(500).json({message: "Error loading form"})
    }
});




module.exports = router;