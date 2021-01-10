const express = require('express');
const router = express.Router({ mergeParams: true });
const controller = require('./controller');

router.get('/', (req, res) => {
  res.status(200).send(controller.getProducts());
});

router.get('/:id', (req, res) => {
  console.log(req.params);
  res.status(200).send(controller.getProduct(req.params.id));
});

router.post('/', (req, res) => {
  controller.createProduct(req.body);
  res.status(201).send({ message: 'Product created' });
});

router.delete('/:id', (req, res) => {
  controller.deleteProduct(req.params.id);
  res.status(201).send({ message: 'Product deleted' });
});

module.exports = router;
