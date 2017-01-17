var moment = require('moment');

module.exports = function (req, res) {
    console.log('hello!');
    var query = req.query.date ?
            {'menus.date': new Date(req.query.date)} : {'menus.date': moment().format().setHours(0, 0, 0, 0)};
    console.log(query);
    req.collection.find(query, {sort: {_id: 1}, fields: {_id: 1, name: 1}})
            .then(function (result) {
                result.forEach(function (restaurant) {
                    restaurant.menus = restaurant.menus.filter(function (value) {
                        return value.date.getTime() === query['menus.date'].getTime();
                    });
                });
                res.send(result);
            });
};
