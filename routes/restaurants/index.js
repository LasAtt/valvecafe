const router = require('express').Router()
       , all = require('./all')
       , single = require('./single')
       , datemenus = require('./datemenus')
       , restaurantmenus = require('./restaurantmenus')
       , menus = require('./menus');

router.get('/', all);
router.use('/:_id/menus', menus);
router.use('/menus', restaurantmenus);
router.get('/menus/:date', datemenus);
router.get('/:_id', single);

module.exports = router;
