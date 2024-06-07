const express = require('express');
const app = express();
const PORT = 8080;
const { dbConnection } = require('./config/db');

const routes = require('./routes/productRoutes');

app.use(express.json())
app.use(express.urlencoded({extended:false}));
app.use(express.static('./public/images'));

app.use('/', routes);

dbConnection();

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));