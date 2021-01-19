const express = require('express');
const router = express.Router();
const config = require('./config');

const products = require('./products');

router.use(products.config.ENDPOINT, products.route);

module.exports = {
  config,
  route: router,
};
