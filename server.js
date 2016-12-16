const express = require('express');
const app = express();
const request = require('request');
const port = 3000;

const router = express.Router();

const listoptions = {
    uri: 'restaurants/',
    baseUrl: 'http://hyy-lounastyokalu-production.herokuapp.com/publicapi/',
    method: 'GET',
    json: true
};

function buildRequest(uri) {
    return {
        uri: uri,
        baseUrl: 'http://hyy-lounastyokalu-production.herokuapp.com/publicapi/',
        method: 'GET',
        json: true
    }
}

router.get('/', function (req, res) {
    res.json({message: 'hello world!'})
})

router.get('/restaurants', (req, resp) => {
    request(buildRequest('restaurants'), function (error, response, body) {
        if (!error && response.statusCode === 200) {
            resp.send(body);
        }
    });
});

router.get('/restaurant/:restaurant_id', (req, resp) => {
    request(buildRequest('restaurants'), function (error, response, body) {
        if (!error && response.statusCode === 200) {
            resp.send(body);
        }
    });
});

app.use('/api', router)

app.listen(port);