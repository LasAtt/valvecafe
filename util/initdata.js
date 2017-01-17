var request = require('request')
        , formater = require('./lunchformater');

function buildRequest(uri) {
    return {
        uri: uri,
        baseUrl: 'http://hyy-lounastyokalu-production.herokuapp.com/publicapi/',
        method: 'GET',
        json: true
    };
}

module.exports = function (db) {
    request(buildRequest('restaurants'), function (error, response, body) {
        body.data.forEach(function (restaurant) {
            var _id = restaurant.id;
            var areacode = restaurant.areacode;
            request(buildRequest('restaurant/' + restaurant.id), function (err, res, bod) {
                var collection = db.get('restaurants');
                var restaurant = formater.format(_id, areacode, bod)
                collection.update({_id: _id}, restaurant, {upsert: true});
            });
        });
    });
};
