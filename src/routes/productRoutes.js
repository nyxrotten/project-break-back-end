const express = require("express");
const router = express.Router();
const {Product} = require('../models/Product');
const { generateDashboard, newProductForm , generateHomePage, generateProductById,
generateProductsByCategory, editProductPage, generateLogIn,
deleteById}  = require("../controllers/productController");


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



//Devuelve un productoporId
router.get('/products/:id', generateProductById);

//Devuelve todos los productos.
router.get('/products', generateHomePage);

//Genera una página con los productos de una categoría
router.get('/products/category/:category', generateProductsByCategory);

//Página de login
router.get('/dashboard/login', generateLogIn); 

//Formulario para generar un nuevo producto en el admin
router.get('/dashboard/new', newProductForm);

//Dashboard del administrador con todos los artículos linkados
router.get('/dashboard', generateDashboard);

//Edita un producto en el admin
router.get('/dashboard/:id', editProductPage);


//Elimina un producto por id
router.delete('/dashboard/:id/delete', deleteById);


router.post('/dashboard', async (req, res) => {
    try {
        console.log(req.body)
        // Asegurate de que los atributos name de los inputs coinciden con los campoos del schema de mongoose para que el objeto req.body que pasas al .create() lo tome como un documento válido.
        const post = await Product.create(req.body);
        res.status(201).redirect('/dashboard/new');
        
        } catch (error) {
            console.log(error)
            res.status(500).json({message: "Error getting products"})
        }
});




module.exports = router;