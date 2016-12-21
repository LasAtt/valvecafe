var monk = require('monk')
        , assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/kumpulamenu';


var insertRestaurant = function (restaurant) {
    MongoClient.connect(url, function (err, db) {

        assert.equal(null, err);

        insertRestaurantDocument(restaurant, db, function () {
            db.close();
        });
    });
}

var insertRestaurantDocument = function (restaurant, db, callback) {
    var collection = db.collection('restaurants');

    collection.insert(restaurant, function (err, result) {
        assert.equal(err, null);
        console.log(result);
    });
};

module.exports.insertRestaurant = insertRestaurant();