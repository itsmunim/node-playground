const config = require('./config');

class ProductController {
  static getProducts(context) {
    return await context.db.getAll(config.COLLECTION_NAME);
  }
}

module.exports = ProductController;
