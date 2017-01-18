module.exports = function (req, res, next) {
    req.visibility['menus'] = 1;
    req.collection.findOne({_id: req._id}, {fields: req.visibility})
            .then(function (result) {
                req.result = result;
                next();
            });
};

