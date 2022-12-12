'use strict';

const response = require('../response');
const db = require('../settings/db');

exports.products = (req, res) => {
  db.query('SELECT * FROM `product`', (err, rows, fields) => {
    if (err) {
      console.log(err);
    } else {
      response.status(rows, res);
    }
  });
};
