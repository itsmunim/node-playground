let products = [];

function getProducts() {
  return products;
}

function getProduct(id) {
  return products.find((prod) => prod.id === Number(id));
}

function createProduct(product) {
  products.push(product);
}

function deleteProduct(id) {
  products = products.filter((product) => Number(id) !== product.id);
}

module.exports = {
  getProduct,
  getProducts,
  createProduct,
  deleteProduct,
};
