const router = require('express').Router()
       , all = require('./all')
       , single = require('./single')
       , datemenus = require('./datemenus')
       , restaurantmenus = require('./restaurantmenus')
       , menus = require('./menus');

router.get('/', all);
router.get('/:_id', single);
router.use('/:_id/menus', menus);
router.get('/menus', restaurantmenus);
router.get('/menus/:date', datemenus);


module.exports = router;
