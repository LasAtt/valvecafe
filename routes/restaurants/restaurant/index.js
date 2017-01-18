const router = require('express').Router()
        , single = require('./single')
        , menus = require('./menus');

router.get('/', single);
router.use('/menus', menus);

module.exports = router;
