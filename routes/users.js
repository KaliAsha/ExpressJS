module.exports = function(io) {
  var debug = require('debug')('HelloWorld:users');
  var express = require('express');
  var router = express.Router();

  /* GET users */
  router.get('/', function(req, res, next) {
    res.send('respond with a resource');
  });

  return router;
}
