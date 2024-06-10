const express = require('express');
const app = express();
require('dotenv').config("");
const PORT  = process.env.PORT || 3000;
const { dbConnection } = require('./config/db');
const cors = require('cors');
const routes = require('./routes/productRoutes');

app.use(express.json())
app.use(express.urlencoded({extended:false}));
app.use(express.static('./public/images'));
// app.use((req, res, next) => {
//     res.header("Acces-Control-Allow-Origin", `"http://localhost:${PORT}"`);
//     res.header("Acces-Control-Allow-Origin", "GET, POST, OPTIONS");
//     res.header("Acces-Control-Allow-Origin", "Content-Type");

// })

app.use('/', routes); 


dbConnection();

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));