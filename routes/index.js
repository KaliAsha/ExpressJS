module.exports = (io) => {
  const debug = require('debug')('HelloWorld:index');
  const express = require('express');
  const router = express.Router();

  /* GET home page */
  router.get('/', function(req, res, next) {
    var partials = req.app.get('partials');
    partials.body = 'partial';
    res.render('layout', {
      title: 'Express',
      partials
    });
  });

  return router;
}
