module.exports = function (req, res) {
    var _id = req.params._id * 1;
    console.log(_id);
    req.collection.findOne({_id: _id}, {fields: {_id: 1, name: 1, areacode: 1}})
            .then(function (data) {
                res.send(data);
            });
};
