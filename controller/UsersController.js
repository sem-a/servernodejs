'use strict';

const response = require('../response');
const db = require('../settings/db');

exports.users = (req, res) => {
  db.query('SELECT * FROM `user`', (err, rows, fields) => {
    if (err) {
      console.log(err);
    } else {
      response.status(rows, res);
    }
  });
};

exports.auth = (req, res) => {
  const email = req.query.email;
  const sql = "SELECT * FROM `user` WHERE email='" + email + "'";
  db.query(sql, (err, results) => {
    if(err) {
      console.log(err);
    } else {
      response.status(results, res);
    }
  }); 
};

exports.add = (req, res) => {
  const sql = "INSERT INTO `user`(`name`, `email`, `password`, `phone`, `amount`, `gender`) VALUES('" + req.query.name + "', '" +  req.query.email + "', '" + req.query.password + "', '" + req.query.phone + "', '" + req.query.amount + "', '" + req.query.gender +"')";
  db.query(sql, (err, results) => {
    if(err){ 
      console.log(err);
    } else {
      response.status(results, res);
    }
  });
};
