module.exports = function (req, res) {
    req.collection.findOne({_id: req._id}, {fields: req.visibility})
            .then(function (result) {
                res.send(result);
            });
};
