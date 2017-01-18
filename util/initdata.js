var request = require('request')
        , util = require('./util')
        , formater = require('./lunchformater');

module.exports = function (db) {
    request(util.buildRequest('restaurants'), function (error, response, body) {
        body.data.forEach(function (restaurant) {
            var _id = restaurant.id;
            var areacode = restaurant.areacode;
            request(util.buildRequest('restaurant/' + restaurant.id), function (err, res, bod) {
                var collection = db.get('restaurants');
                var restaurant = formater.format(_id, areacode, bod);
                collection.update({_id: _id}, restaurant, {upsert: true});
            });
        });
    });
};
