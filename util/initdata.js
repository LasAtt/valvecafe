var request = require('request')
        , util = require('./util')
        , formater = require('./lunchformater')
        , monk = require('monk');

var db = monk('localhost:27017/kumpulamenu');

request(util.buildRequest('restaurants'), function (error, response, body) {
    body.data.forEach(function (restaurant) {
        var _id = restaurant.id;
        request(util.buildRequest('restaurant/' + restaurant.id), function (err, res, bod) {
            var collection = db.get('restaurants');
            var restaurant = formater.format(_id, bod)
            collection.update({_id: _id}, restaurant, {upsert: true});
        });

    });
});
