var express = require('express');
var router = express.Router();
var config = require('../config/config.js');
var pg = require('pg');

var pool = new pg.Pool({
  database: config.database
});

// return all super power names
router.get('/', function (req, res) {
  console.log('getting powers');
  console.log(pool);
  pool.connect()
    .then(function (client) {
      client.query('SELECT * FROM super_powers')
        .then(function (result) {
          client.release();
          res.send(result.rows);
        });
    })
    .catch(function (err) {
      console.log('error on SELECT', err);
      res.sendStatus(500);
    });
});


module.exports = router;
