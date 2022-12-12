'use strict';

const response = require('../response');
const db = require('../settings/db');

exports.cart = (req, res) => {
  db.query('SELECT * FROM `cart`', (err, rows, fields) => {
    if (err) {
      console.log(err);
    } else {
      response.status(rows, res);
    }
  });
};

exports.userCart = (req, res) => {
  const cartId = req.query.id_cart;
  if(cartId) {
    const sql = 'SELECT cart.id_cart, cart.id_product, product.name_product, product.description, product.price, product.image FROM product JOIN cart ON cart.id_product = product.id WHERE cart.id_cart=' + cartId;
    db.query(sql, (err, results) => {
      if(err) {
        console.log(err);
      } else {
        response.status(results, res);
      }
    });
  } else {
    console.log('Войдите в аккаунт');
  }
};

exports.add = (req, res) => {
  const cartId = req.query.userId;
  const productId = req.query.productId;
  const sql = "INSERT INTO `cart` (`id_cart`, `id_product`) VALUES('" + cartId + "', '" + productId + "');";
  db.query(sql, (err, results) => {
    if(err) {
      console.log(err);
    } else {
      response.status(results, res);
    }
  });
};
exports.delete = (req, res) => {
  const productId = req.query.productId;

  const sql = 'DELETE FROM `cart` WHERE id_product=' + productId;

  db.query(sql, (err, results) => {
    if(err) {
      console.log(err);
    } else {
      response.status(results, res);
    };
  });
};

exports.find = (req, res) => {
  const productId = req.query.productId;
  const userId = req.query.userId;

  const sql = 'SELECT * FROM `cart` WHERE id_cart=' + userId + ' and id_product =' + productId;
  db.query(sql, (err, results) => {
    if(err) {
      console.log(err);
    } else {
      response.status(results, res);
    };
  });
}