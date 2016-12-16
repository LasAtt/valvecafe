const express = require('express');
const app = express();
const request = require('request');
const util = require('./app/util');
const unicafe = require('./app/unicafe')
const port = 3000;

const router = express.Router();

router.get('/', function (req, res) {
    res.json({message: 'hello world!'});
});

router.route('/restaurants')
        .get(function (req, res) {
            request(util.buildRequest('restaurants'), function (error, response, body) {
                if (!error && response.statusCode === 200) {
                    console.log(body);
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

router.route('/exactum')
        .get(function (req, res) {
            res.send(unicafe.exactum());
        });

app.use('/api', router);

app.listen(port);