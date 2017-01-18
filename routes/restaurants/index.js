const router = require('express').Router()
        , all = require('./all')
        , restaurant = require('./restaurant');

router.param('_id', function (req, res, next, _id) {
    req._id = _id * 1;
    next();
});

router.get('/', all);
router.use('/:_id', restaurant);

module.exports = router;
