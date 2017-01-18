const router = require('express').Router({mergeParams: true})
      , all = require('./all')
      , date = require('./singledate');

router.get('/', all);
router.get('/:date', date);

module.exports = router;
