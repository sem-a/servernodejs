'use strict';

module.exports = (app) => {
  const indexController = require('./../controller/IndexController');
  const usersController = require('../controller/UsersController');
  const productsController = require('../controller/ProductsController');
  const cartController = require('../controller/CartController');

  app.route('/').get(indexController.index);
  app.route('/users').get(usersController.users);
  app.route('/users/add').get(usersController.add);
  app.route('/users/auth').get(usersController.auth);
  app.route('/products').get(productsController.products);
  app.route('/cart').get(cartController.cart);
  app.route('/cart/get').get(cartController.userCart);
  app.route('/cart/add').get(cartController.add);
  app.route('/cart/delete').get(cartController.delete);
  app.route('/cart/find').get(cartController.find);
};
