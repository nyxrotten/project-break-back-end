const express = require("express");
const router = express.Router();
const {Product, getProductCards} = require('../models/Product');
const { generateDashboard, newProductForm } = require("../controllers/productController");

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
    const products = await Product.find();
    res.status(200).send(products);
    console.log("Getting products");
    } catch (error) {
        res.status(500).json({message: "Error getting products"})
    }
})

//Devuelve el detalle de un producto.
router.get('/products/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(201).send(product);
    } catch (error) {
        res.status(500).json({message: "Error finding product by id"})
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



router.get('/dashboard/new', async (req, res) => {
    try {
            const productForm = await newProductForm();
            res.status(201).send(productForm);

    } catch (error) {
        res.status(500).json({message: "Error loading form"})
    }
})

router.post('/dashboard', async (req, res) => {
    try {
        const products = await Product.find();
        res.status(201).send(products);
        console.log("Getting dashboard");
        } catch (error) {
            res.status(500).json({message: "Error getting products"})
        }
})

router.get('/dashboard', async (req, res) => {
    try {
        const dashboard = await generateDashboard();
        res.status(201).send(dashboard);
        } catch (error) {
            res.status(500).json({message: "Error"})
        }
})

router.post('/', function (req, res) {
    console.log(req.body);
    res.end();
});



module.exports = router;