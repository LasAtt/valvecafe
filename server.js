const express = require('express');
const app = express();
const request = require('request');
const port = 3000;

const listoptions = {
    uri: 'restaurants/',
    baseUrl: 'http://hyy-lounastyokalu-production.herokuapp.com/publicapi/',
    method: 'GET',
    json: true
};

app.get('/restaurants', (req, resp) => {
    request(listoptions, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            resp.send(body);
        }
    });
});

app.get('/restaurant/{id}', (req, resp) => {
    request(listoptions, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            resp.send(body);
        }
    });
});

app.listen(30000);