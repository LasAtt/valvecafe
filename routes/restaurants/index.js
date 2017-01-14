const router = require('express').Router()
       , all = require('./all')
       , single = require('./single')
       , datemenus = require('./datemenus')
       , menus = require('./menus');

router.get('/', all);
router.get('/:_id', single);
router.get('/menus/:date', datemenus);

router.use('/:_id/menus', menus);

module.exports = router;
