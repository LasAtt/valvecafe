const router = require('express').Router()
       , all = require('./all')
       , single = require('./single')
       , allmenus = require('./allmenus')
       , datemenus = require('./datemenus')
       , menus = require('./menus');

router.get('/', all);
router.get('/:_id', single);
router.get('/allmenus', allmenus);
router.get('/menus/:date', datemenus);

router.use('/:_id/menus', menus);

module.exports = router;
