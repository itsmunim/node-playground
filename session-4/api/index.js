const express = require('express');
const router = express.Router();
const config = require('./config');

const products = require('./products');
const users = require('./users');

router.use(products.config.ENDPOINT, products.route);
router.use(users.config.ENDPOINT, users.route);

module.exports = {
  config,
  route: router,
};
