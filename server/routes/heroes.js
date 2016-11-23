var express = require('express');
var router = express.Router();
var config = require('../config/config.js');
var pg = require('pg');

var pool = new pg.Pool(config.database);

// return all heroes
router.get('/', function (req, res) {
  pool.connect()
    .then(function (client) {
      client.query('SELECT * FROM heroes')
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
