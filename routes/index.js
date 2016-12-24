const router = require('express').Router()
      , request = require('request')
      , restaurants = require('./restaurants');

router.use('/restaurants', restaurants);

module.exports = router;
