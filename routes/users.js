module.exports = (io) => {
  const debug = require('debug')('HelloWorld:users');
  const express = require('express');
  const router = express.Router();

  /* GET users */
  router.get('/', function(req, res, next) {
    res.send('respond with a resource');
  });

  return router;
}
