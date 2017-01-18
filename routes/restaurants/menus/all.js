module.exports = function (req, res) {
    var _id = req.params._id * 1;
    var query = req.query.date ?
            {_id: _id, 'menus.date': new Date(req.query.date)} : {_id: _id};
    req.collection.findOne(query, {fields: {_id: 1, areacode: 1, menus: 1}}).then(function (result) {
        if (!query['menus.date']) {
            res.send(result);
            return;
        }
        result.menus = result.menus.filter(function (value) {
            return value.date.getTime() === query['menus.date'].getTime();
        });
        res.send(result);
    });
};
