var express = require('express'),
        request = require('request'),
        monk = require('monk'),
        util = require('./app/util'),
        unicafe = require('./app/unicafe'),
        formater = require('./app/lunchformater');
require('./app/initdata');

var app = express();
var router = express.Router();

var db = monk('localhost:27017/kumpulamenu');

var port = 3000;


router.get('/', function (req, res) {
    res.json({message: 'hello world!'});
});

router.route('/restaurants')
        .get(function (req, res) {
            request(util.buildRequest('restaurants'), function (error, response, body) {
                if (!error && response.statusCode === 200) {
                    res.send(body);
                }
            });
        });

router.route('/restaurant/:restaurant_id')
        .get(function (req, res) {
            request(util.buildRequest('restaurant/' + req.params.restaurant_id), function (error, response, body) {
                if (!error && response.statusCode === 200) {
                    res.send(body);
                }
            });
        });

router.route('/?/restaurants')
        .get(function (req, res) {
            request(util.buildRequest('restaurants'), function (error, response, body) {
                if (!error && response.statusCode === 200) {
                    res.send(body);
                }
            });
        });

router.route('/?/restaurant/:restaurant_id')
        .get(function (req, res) {
            var db = req.db;
            
        });


app.use(function (req, res, next) {
    req.db = db;
    next();
})

app.use('/api', router);

app.listen(port);