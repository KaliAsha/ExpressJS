module.exports = (io) => {
  const debug = require('debug')('HelloWorld:index');
  const express = require('express');
  const router = express.Router();

  /* GET home page */
  router.get('/', function(req, res, next) {
    res.render('index', {
      title: 'Express',
      partials: {partial: 'partial'}
    });
  });

  return router;
}
