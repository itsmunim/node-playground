const express = require('express');
const router = express.Router({ mergeParams: true });
let ProductController = require('./controller');

router.get('/', async (req, res) => {
  res.status(200).send(await ProductController.getProducts(req));
});

module.exports = router;
