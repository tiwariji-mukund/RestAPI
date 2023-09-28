const express = require('express');
const routes = express.Router();

const { getAllProducts, getAllProductsTesting } = require('../controllers/products');

routes.get('/', getAllProducts);
routes.get('/testing', getAllProductsTesting);

module.exports = routes;