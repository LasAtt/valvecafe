const router = require('express').Router({mergeParams: true})
        , menus = require('./menus')
        , date = require('./date')
        , all = require('./all')
        , singledate = require('./singledate');

router.use(menus);
router.param('date', date);
router.get('/', all);
router.get('/:date', singledate);

module.exports = router;
